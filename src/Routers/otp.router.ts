import express, { Router, Request, Response } from "express";
import { GetOtp } from "../Controllers/Otp/Otp.controller";

const otp: Router = express.Router();

/**
 * @otp_routes
 */

otp.post("/get-otp" , GetOtp)

export default otp;
