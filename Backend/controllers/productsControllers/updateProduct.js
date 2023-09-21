import Product from "../../models/productModel.js";
import asyncHandler from "express-async-handler";
import cloudinary from "../../config/cloudConfig.js";
import { fileSizeFormatter } from "../../utils/uploads.js";



//Update a product
const updateProduct = asyncHandler( async (req, res) => {
    // deconstruct updated columns from schema
    const { name, sku, category, quantity, price, description } = req.body;
    const { id } = req.params;

    const product = await Product.findById(id);

    // If the product does not exist
    if(!product) {
        res.status(404);
        throw new Error("Product not found");
    }

    
    // Handle Image upload
  let fileData = {};
  if (req.file) {
    // Save image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Pinvent App",
        resource_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }

  // Update product
  const updatedProduct = await Product.findByIdAndUpdate(
    {_id: id},
    {
      name,
      sku,
      category,
      quantity,
      price,
      description,
      image: Object.keys(fileData).length === 0 ? product?.image : fileData,
    },
    {
      new: true,
      runsValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: updatedProduct,
  });
});

export default updateProduct;