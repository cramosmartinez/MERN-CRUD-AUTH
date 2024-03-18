import { Mongoose } from "mongoose";

export const connect = async () => {
  Mongoose.connect("mongodb://localhost/merndb");
};
