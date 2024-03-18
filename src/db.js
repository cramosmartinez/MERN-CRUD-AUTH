import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log(">>> DB is connected");
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
};
