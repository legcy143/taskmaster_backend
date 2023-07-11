import express, { Express , Request , Response } from "express";
const http = require("http");
import { mongo_connection } from "./Config/MongoDB/mongo.connection";
import cors from "cors";
import bodyParser from "body-parser";
const dotenv = require("dotenv");
import { Server } from "socket.io";
import router from "./Routers/router";
const app: Express = express();
const PORT: number = 8000;
const server = http.createServer(app);

/* Connections */
//MongoDb
mongo_connection()

//SocketIO
const io = new Server(server, {
  cors: {
    origin: "*"
  }
})
//Dot Env Config
dotenv.config()

/*  Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Enable CORS

/*  Routers */
app.get("/" , (req:Request , res:Response)=>{
  res.status(200).send("ok lesh go , work")
})
app.use(router)


server.listen(PORT, () => {
  console.log(`App Listing to ${PORT} at http://localhost:${PORT}`);
});
// app.listen(PORT, () => {
//   console.log(`App Listing to ${PORT} at http://localhost:${PORT}`);
// });

