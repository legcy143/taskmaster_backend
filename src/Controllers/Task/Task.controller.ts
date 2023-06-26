import { Request, Response } from "express";
import { User } from "../../Database/Models/User";
import { Task } from "../../Database/Models/Task";
import { DateTimeGenerator } from "../../Utils/DateTime/DateTime";

export const AddTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    try {
        const userId = req.body.userID;
            let task = await Task.create({
                user:userId,
                title,
                description,
            })
            let taskDetail = { title, description, createdAt: task?.createdAt }
            return res
                .status(200)
                .send({ success: true, taskDetail })
    } catch (error) {
        console.log("err=> " , error)
        return res
            .status(500)
            .send({ success: false, error: "Internal server error" })
    }
}
export const ReadTask = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userID;
            let task = await Task.find({ user:userId });
            return res
                .status(200)
                .send({ success: true , task })

    } catch (error) {
        console.log("err=> " , error)
        return res
            .status(500)
            .send({ success: false, error: "Internal server error" })
    }
}
export const UpdateTask = async (req: Request, res: Response) => {
    const {taskId , title, description} = req.body;
    const updateAt = DateTimeGenerator();
    try {
        const userId = req.body.userID;
        let task = await Task.findOneAndUpdate(
            { user:userId  , _id:taskId},
            {title, description,updateAt},
            {new:true}
            );
        if (task) {
            let UpdatedtaskDetail = { title:task?.title, description:task?.description, createdAt: task?.createdAt }
            return res
                .status(200)
                .send({ success: true, UpdatedtaskDetail })
        }
        return res
            .status(404)
            .send({ success: false, error: "no task found" });
    } catch (error) {
        console.log("err=> " , error)
        return res
            .status(500)
            .send({ success: false, error: "Internal server error" })
    }
}
export const DeleteTask = async (req: Request, res: Response) => {
    const {taskId} = req.body
    try {
        const userId = req.body.userID;
        let task = await Task.findOneAndDelete({user:userId , _id:taskId})
        if (task) {
            let taskDetail = { title:task?.title, description:task?.description, createdAt: task?.createdAt }
            return res
                .status(200)
                .send({ success: true, taskDetail })
        }
        return res
            .status(404)
            .send({ success: false, error: "task not found" });
    } catch (error) {
        console.log("err=> " , error)
        return res
            .status(500)
            .send({ success: false, error: "Internal server error" })
    }
}