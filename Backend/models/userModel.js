import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userschema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please insert a name"]
    },
    email: {
        type: String,
        required: [true, "Please insert a mail"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please input a password"],
        minLength: [6, "Password must have up to 6 characters"],
        //maxLength: [23, "Password must not be more than 23 characters"],
    },
    photo: {
        type: String,
        required: [true, "Please input a photo"],
        default: "https://i.ibb.co/4pDNDk1/avatar.png",                
    },
    phone: {
        type: String,
        default: "+234",
    },
    bio: {
        type: String,
        maxLength: [255, "bio must not be more than 255 characters"],
        default: "bio",
    },

}, 
    { timestamps: true, }
);

// encrypt password before saving it to dB

userschema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
});

//hash the password


export default mongoose.model('User', userschema);