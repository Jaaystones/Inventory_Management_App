import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import cloudinary from "../config/cloudConfig.js";
import { fileSizeFormatter } from "../utils/uploads.js";




// Create a new Product
const createProduct = asyncHandler(async (req, res) => {
    const { name, sku, category, quantity, price, description } = req.body;

    // Retrieve user information from authentication context
    const userId = req.user._id; 
    

    //Validation
    if (!name ||!category ||!quantity ||!price ||!description) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    //Photo upload
    let fileData = {};
    if (req.file) {
       //Save to cloudinary
       let uploadFile;
        try{
          uploadFile = await cloudinary.uploader.upload( req.file.path, {
          folder: "Jay App",
          resource_type: "image",
          });
       
    
         fileData = {
            fileName: req.file.originalname,
            filePath: uploadFile.secure_url,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),
         };
         // Log successful upload for debugging
        console.log("File uploaded successfully:", uploadFile);
        console.log(req.file.path);
        }catch(error) {
            // Log the error for debugging
            console.error("Error during Cloudinary upload:", error);
        
            res.status(500);
            throw new Error("Image could not be uploaded");
        }
    }

    //Create a new Product
    const product = await Product.create({
        user: userId,
        name,
        sku,
        category,
        quantity,
        price,
        description,
        image: fileData,
    });
    res.status(201).json({
        success: true,
        data: product,
    });
        
    
});






export default createProduct;