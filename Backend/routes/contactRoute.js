import express from "express";
import contactUs  from "../controllers/contactController.js";
import Secure from "../middleWare/authMiddleware.js";

const router = express.Router();

router.post("/", Secure, contactUs);

export default router;