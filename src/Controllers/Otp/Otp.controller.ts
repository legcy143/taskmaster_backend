import { Request, Response } from "express";
import { Otp } from "../../Database/Models/Otp";
import { OtpBoiler } from "../../Helper/Jsx/OtpBoiler";
import nodemailer from "nodemailer"
import { OtpGenerator, VerificationCodeGenerator } from "../../Utils/Otp/OtpUtils";

export const GetOtp = async (req: Request, res: Response) => {
  const { email } = req.body
  const otp = OtpGenerator()
  const VerificationCode = VerificationCodeGenerator()
  try {
    var transporter = nodemailer.createTransport(
      {
        service: 'Gmail',
        auth: {
          user: 'mani976623@gmail.com',
          pass: 'qnukqpwureosctmp' // Replace with the generated app password
        }
      })
    let timeOtp = new Date().toLocaleString();
    const mailOptions:any = {
      from: '"taskmaster" <mani976623@gmail.com>',
      to: email,
      subject: "taskmaster otp",
      html: OtpBoiler(otp, timeOtp),
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log('Error occurred:', error);
        return res
            .status(500)
            .send({ success: false });
      } else {
        let userOtp = await Otp.findOne({ email })
        console.log("userOtp  ", userOtp)
        if (userOtp) {
          userOtp = await Otp.findByIdAndUpdate(
            userOtp._id,
            {
              otp,
              VerificationCode,
              isValid:true,
            },
            { new: true }
          )
          return res
            .status(200)
            .send({ success: true });
            
          }
          userOtp = await Otp.create({
            email,
            otp,
            VerificationCode,
        })
        console.log('Email sent:', info.response);
        return res
          .status(200)
          .send({ success: true });
      }
    })
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, error: "Internal server error" });
  }
}