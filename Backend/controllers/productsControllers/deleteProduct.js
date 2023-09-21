import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";


const deleteProduct = asyncHandler( async (req, res) => {
    
    // get the product Id
    const product = await Product.findById(req.params.id);
    
    //If product does not exist
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }

    // Match product with user
    if (product.user.toString()!== req.user.id){
        res.status(401);
        throw new Error("User not authorized");
    }
    await product.remove();
    res.status(200).json({ message: "Product removed successfully"});
});

export default deleteProduct;