import { Document } from "mongoose";

export interface IOtp extends Document {
    email:string,
    otp :string,
    VerificationCode :number,
    otpFor :string
    isValid:boolean
    firstVisitAt:string
}