import mongoose, { Document, Schema, startSession } from "mongoose";
import { IOtp } from "../../../interfaces/Otp/Otp";
import { DateTimeGenerator } from "../../../Utils/DateTime/DateTime";

let dateTime = DateTimeGenerator()

export const OtpSchema: Schema<IOtp> = new Schema<IOtp>({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String
    },
    VerificationCode: {
        type: Number
    },
    otpFor: {
        type: String,
        default:"authentication"
    },
    isValid: {
        type: Boolean,
        default:true
    },
    firstVisitAt : {
        type: String,
        default:dateTime,
    }
});
