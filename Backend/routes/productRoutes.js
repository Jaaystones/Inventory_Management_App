import express from 'express';
import { upload } from '../utils/uploads.js';
import Secure from '../middleware/authMiddleware.js';
import createProduct from "../controllers/productsControllers/createProduct.js";
import { getProducts, getProduct } from "../controllers/productsControllers/getProducts.js";
import deleteProduct from "../controllers/productsControllers/deleteProduct.js";
import updateProduct from '../controllers/productsControllers/updateProduct.js';


const router = express.Router();

router.post('/', Secure, upload.single("image"), createProduct);
router.patch('/:id', Secure, upload.single("image"), updateProduct);
router.get('/', Secure, getProducts);
router.get('/:id', Secure, getProduct);
router.delete('/:id', Secure, deleteProduct);



export default router;