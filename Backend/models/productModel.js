import mongoose from 'mongoose';

const productSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    sku: {
        type: String,
        required: true,
        default: "SKU",
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please select a category"],        
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please select a price"], 
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, "Please select a quantity"], 
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: Object,
        default: {},
    },
},
    {
        timestamps: true,
    }
);


const Product = mongoose.model('Product', productSchema);

export default Product;