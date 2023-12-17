import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
