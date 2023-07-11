import express, { Router, Request, Response } from "express";
import { AddTask, DeleteTask, ReadTask, UpdateTask } from "../Controllers/Task/Task.controller";
import VerifyTokenMiddleman from "../Middlewares/VerifyToken.middleman";

const task: Router = express.Router();

/**
 * @task_routes
 */

// create
task.post("/add-task" , VerifyTokenMiddleman , AddTask)
// read
task.post("/all-task" , VerifyTokenMiddleman , ReadTask)
// update
task.patch("/update-task" , VerifyTokenMiddleman , UpdateTask)
// delete
task.delete("/delete-task" , VerifyTokenMiddleman , DeleteTask)


export default task;
