import { Request, Response } from "express";
import { User } from "../../Database/Models/User";
import { Otp } from "../../Database/Models/Otp";
import { VerificationCodeGenerator } from "../../Utils/Otp/OtpUtils";
import { generateAccessToken } from "../../Utils/JWT/AccessToken";
import { DateTimeGenerator } from "../../Utils/DateTime/DateTime";

export const VerifyUser = async (req: Request, res: Response) => {
  const { email, otp } = req.body
  try {
    const VerificationCode = VerificationCodeGenerator()
    let userOtp = await Otp.findOne({ email })
    if (userOtp) {
      // valid otp for 600 second it mean 10 minute
      if (VerificationCode - userOtp.VerificationCode <= 600 && otp == userOtp.otp && userOtp.isValid) {
        // update otp that it's invalid
        userOtp = await Otp.findByIdAndUpdate(
          userOtp._id,
          {
            isValid: false,
          },
          { new: true }
        )
        // creating user or if user then send auth token
        let user = await User.findOne({ email })
        if (user) {
          // const JWT = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
          const JWT = generateAccessToken(user._id);
          let userDetail = { email: user?.email, name: user?.name, bio: user?.bio, gender: user?.gender }
          return res
            .status(200)
            .send({ success: true, userDetail, JWT, isNewUser: false });
        }
        user = await User.create({
          email
        })
        const JWT = generateAccessToken(user._id);
        let userDetail = { email: user?.email, name: user?.name, bio: user?.bio, gender: user?.gender }
        return res
          .status(200)
          .send({ success: true, userDetail, JWT, isNewUser: true });
      }
      else {
        return res
          .status(401)
          .send({ success: false, error: "invalid otp or expired otp" });
      }
    }
    else {
      return res
        .status(404)
        .send({ success: false, error: "otp not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, error: "Internal server error" });
  }
}



export const EditUserProfile = async (req: Request, res: Response) => {
  const userID: string | number = req.body.userID;
  const { name, bio , gender} = req.body
  const updateAt = DateTimeGenerator()
  try {
    let user = await User.findOne({ _id: userID });
    user = await User.findOneAndUpdate(
        user?._id,
        { name , bio , gender ,updateAt},
        { new: true },
    )
    let userDetail = { email: user?.email, name: user?.name, bio: user?.bio, gender: user?.gender }
    return res
      .status(200)
      .send({ success: true, userDetail, user });
  } catch (error) {
    // console.log(error)
    return res
      .status(500)
      .send({ success: false, error: "Internal server error" });
  }
}