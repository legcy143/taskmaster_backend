import mongoose from "mongoose";
import { IUser } from "../../interfaces/User/User";
import { UserSchema } from "../Schemas/User/User.schema";

export const User = mongoose.model<IUser>('User', UserSchema);
