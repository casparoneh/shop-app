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

export const getRelatedProducts = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Fetch related products based on color, size, title, and price
    const relatedProducts = await Product.find({
      colors: { $in: product.colors },
      sizes: { $in: product.sizes },
      // title: product.title,
      price: { $gte: product.price - 10, $lte: product.price + 10 }, // Adjust the range as needed
      _id: { $ne: productId }, // Exclude the current product
    }).limit(4);

    res.status(200).json(relatedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};