
export const OtpBoiler =(otp:string | number , time:string | number):any=>{
    const  otpContainer = `
    <div style="font-family: Helvetica,Arial,sans-serif;width:90%;max-width:500px;overflow:auto;line-height:2">
    <div style="margin:20px auto;width:90%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">bookontap</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing bookontap. Use the following OTP to complete your verification procedures. OTP is valid for 10 minutes</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />bookontap</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>book on tap</p>
        <p>india</p>
        <p>${time}</p>
      </div>
    </div>
  </div>
    `
    return otpContainer
}