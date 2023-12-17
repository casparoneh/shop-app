import express from "express";
import { signup,signin,signout } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

export default router;
