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

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await Product.findByIdAndDelete({ _id: id });
  
      if (!user) {
        return res.json({ error: "Product not found" });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  };
  
