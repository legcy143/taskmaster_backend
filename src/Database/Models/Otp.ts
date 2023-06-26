import mongoose from "mongoose";
import { IOtp } from "../../interfaces/Otp/Otp";
import { OtpSchema } from "../Schemas/Otp/Otp.schema";

export const Otp = mongoose.model<IOtp>('Otp', OtpSchema);
