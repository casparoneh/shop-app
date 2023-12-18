import User from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import multer from "multer";
import { errorHandler } from "../utils/error.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
