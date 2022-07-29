import mongoose from "mongoose";
require("dotenv").config();

export const mongoDBConnection = () => mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));
