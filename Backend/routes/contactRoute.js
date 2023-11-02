import express from "express";
import contactUs  from "../controllers/contactController.js";
import Secure  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", Secure, contactUs);

export default router;