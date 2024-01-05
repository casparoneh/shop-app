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


export const updateUser = async (req, res, next) => {




  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    // Check if the request includes a delete avatar action
    if (req.body.deleteAvatar) {
      req.body.avatar = null; // Set avatar to null or remove this line to delete the field
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
          lastname: req.body.lastname,
          phoneNumber: req.body.phoneNumber,
          avatar: req.body.avatar,
          postalCode: req.body.postalCode,
          number: req.body.number,
          city: req.body.city
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    console.log("Updated user:", rest); // Log the updated user details

    res.status(200).json(rest);
  } catch (error) {
    console.error("Error updating user:", error);
    next(error);
  }
};