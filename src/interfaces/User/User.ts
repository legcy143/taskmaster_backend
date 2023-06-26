import { Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    name: string;
    bio: string;
    logo: string;
    gender: string;
    task?:[],
    updateAt:string,
    createdAt: string;
    notification_token: string;
}