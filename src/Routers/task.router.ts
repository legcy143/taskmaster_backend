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
task.get("/all-task" , VerifyTokenMiddleman , ReadTask)
// update
task.get("/update-task" , VerifyTokenMiddleman , UpdateTask)
// delete
task.get("/delete-task" , VerifyTokenMiddleman , DeleteTask)


export default task;
