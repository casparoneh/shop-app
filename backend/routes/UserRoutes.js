import express from "express";
import {
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser
} from "../controllers/UserController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// router.post("/create",createUser)
router.get("/getUsers", getUsers);
router.get("/:id", getSingleUser);
router.delete("/delete/:id", deleteUser);
router.post("/update/:id",verifyToken , updateUser)

// router.post("/update/:id", verifyToken, updateUser);
// router.post("/favorites/add", addFavorite);
// router.post("/favorites/remove", removeFavorite);
// router.get("/favorites/:userId", verifyToken, getFavoriteProperties);

export default router;
