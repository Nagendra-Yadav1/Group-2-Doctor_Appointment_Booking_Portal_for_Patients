import { User } from "../models/userSchema.js";
import jwt from 'jsonwebtoken';

export const Authenticate = async (req, res, next) => {
  const token = req.header("Auth");
  console.log(token)
  try {
    if (!token) return res.json({ message: "Please login first" });

    const decoded = jwt.verify(token, "!@#$%^&*()");
    const id = decoded.userId;
    const user = await User.findById(id);
    if (!user) return res.json({ message: "User does not exist" });
    
    req.user = user;
    next();
  } catch (error) {
    next(error); 
  }
};
