import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";


//Get all products
const getProducts = asyncHandler( async (req, res) => {

    const products = await Product.find({ user: req.user.id }).sort("-createdAt");
    res.status(200).json({
        success: true,
        data: products,
    });
});

// Get one product from a user
const getProduct = asyncHandler( async (req, res) => {
    // get product unique ID
    const product = await Product.findById(req.params.id);
    //If product doesnt exit
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    // Match product with user
    if (product.user.toString() !== req.user.id){
        res.status(401);
        throw new Error("User not authorized");
    }
    res.status(200).json({
        success: true,
        data: product,
    });
});

export { getProduct, getProducts };