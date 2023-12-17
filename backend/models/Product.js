import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reviews: {
      type: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: String,
        },
      ],
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String],
      enum: ["XS", "S", "M", "L", "XL"],
      required: true,
    },
    colors: {
      type: [String],
      enum: ["red", "green", "blue", "white"],
      required: true,
    },
    numberOfOrders: {
      type: Number,
      default: 0,
    },
    whyChoose: {
      type: String,
    },

    weight: {
      type: String,
    },
    dimensions: {
      type: String,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    storage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
