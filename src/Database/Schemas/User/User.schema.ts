import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../../../interfaces/User/User";
import { DateTimeGenerator } from "../../../Utils/DateTime/DateTime";

let dateTime = DateTimeGenerator()
export const UserSchema: Schema<IUser> = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique:true,
    },
    name: {
        type: String,
        default:"Task master"
    },
    bio: {
        type: String,
        default:"write done repeat grow"
    },
    logo: {
        type: String
    },
    gender: {
        type: String,
        default: "Prefer's not to Say"
    },
    task: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    notification_token:{
        type: String,
        default:""
    },
    updateAt:{
        type:String,
        default:dateTime,
    },
    createdAt:{
        type:String,
        default:dateTime,
    }
});
