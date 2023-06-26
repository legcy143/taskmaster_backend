import { Document , Types} from "mongoose";

export interface ITask extends Document {
    user:String;
    title: string;
    description: string;
    level:string
    status:string
    createdAt: string;
    updateAt: string;
}