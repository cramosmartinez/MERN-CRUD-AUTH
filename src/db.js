import { Mongoose } from "mongoose";

export const connect = async () => {
  try {
    await Mongoose.connect("mongodb://localhost/merndb");
  } catch (error) {}
};
