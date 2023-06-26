import mongoose, { Document, Schema, startSession } from "mongoose";
import { DateTimeGenerator } from "../../../Utils/DateTime/DateTime";
import { ITask } from "../../../interfaces/Task/Task";

let dateTime = DateTimeGenerator()

export const TaskSchema: Schema<ITask> = new Schema<ITask>({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    title:{
        type:String,
        defaut:""
    },
    description:{
        type:String,
        defaut:""
    },
    level:{
        type:String,
        default:"medium"
    },
    status:{
        type:String,
        default:"onprogress"
    },
    updateAt:{
        type:String,
        default:dateTime,
    },
    createdAt:{
        type:String,
        default:dateTime,
    },
});
