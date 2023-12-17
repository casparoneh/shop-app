import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 12);

    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();

    res.status(201).json("User created succesfully");
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (req, res,next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials"));
    }

    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT_SECRET
    );

    const { password: pass, ...userInfo } = validUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
  }
};


export const signout = async (req,res,next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out");
  } catch (error) {
     next(error)
  }
}