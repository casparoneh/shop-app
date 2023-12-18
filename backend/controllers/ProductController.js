import Product from "../models/Product.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
