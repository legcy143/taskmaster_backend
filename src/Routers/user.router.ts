import express, { Router, Request, Response } from "express";
import { EditUserProfile, FetchUserProfile, VerifyUser } from "../Controllers/User/user.controller";
import VerifyTokenMiddleman from "../Middlewares/VerifyToken.middleman";

const user: Router = express.Router();
user.post("/fetch-user-profile" , VerifyTokenMiddleman, FetchUserProfile)
user.post("/verify-user" , VerifyUser)
user.post("/update-profile" , VerifyTokenMiddleman , EditUserProfile)

/**
 * Example Request = {
 "payload":{
     "_id":12345sds34
    }
}
*/
// user.post("/get-user-profile", VerifyTokenMiddleman, GetUserProfile)



export default user;
