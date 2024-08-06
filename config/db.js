import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
const connectDB = async () => {
  try {
    const key = process.env.MONGO_URL;
    const conn = await mongoose.connect(key);
    console.log(
      `Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
