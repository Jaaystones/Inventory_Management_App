import express from 'express';
import createProduct from '../controllers/productController.js';
import { upload } from '../utils/uploads.js';
import Secure from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/', Secure, upload.single("image"), createProduct);


export default router;