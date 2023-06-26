import mongoose from "mongoose";
import { TaskSchema } from "../Schemas/Task/Task.schema";
import { ITask } from "../../interfaces/Task/Task";
export const Task = mongoose.model<ITask>('Task', TaskSchema);