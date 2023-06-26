import mongoose from "mongoose";
let URI:string = 'mongodb://127.0.0.1:27017/taskmaster'

export const mongo_connection = (): void => {
    mongoose.connect(URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB => ', error);
        });

}