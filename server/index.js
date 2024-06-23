import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()
dotenv.config()


const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() =>{
            console.log("povezan na bazu")
        })
        .catch((err) => {
            throw err;
        });
};



app.listen(3000, () => {
    connect()
    console.log("connected");
});