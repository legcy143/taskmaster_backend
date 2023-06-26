import express, { Router, Request, Response } from "express";
import user from "./user.router";
import otp from "./otp.router";
import task from "./task.router";
const router: Router = express.Router();

router.use("/api",otp)
router.use("/api",user)
router.use("/api",task)

export default router;