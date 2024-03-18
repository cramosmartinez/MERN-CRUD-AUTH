import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    const userSaved = await newUser.save();
    res.status(201).json(userSaved);
  } catch (error) {
    return res.status(400).json({ message: "Error registering user" });
  }

  res.send("registrado!");
};
export const login = async (req, res) => {
  res.send("Login");
};
