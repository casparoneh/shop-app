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

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.find({ _id: id });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete({ _id: id });

    if (!user) {
      return res.json({ error: "User or property not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};


