import express, { Router, Request, Response } from "express";
import { EditUserProfile, VerifyUser } from "../Controllers/User/user.controller";
import VerifyTokenMiddleman from "../Middlewares/VerifyToken.middleman";

const user: Router = express.Router();
user.get("/verify-user" , VerifyUser)
user.get("/update-profile" , VerifyTokenMiddleman , EditUserProfile)

/**
 * Example Request = {
 "payload":{
     "_id":12345sds34
    }
}
*/
// user.post("/get-user-profile", VerifyTokenMiddleman, GetUserProfile)



export default user;
