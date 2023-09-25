import User from "../models/userModel.js";
import asynchandler from "express-async-handler";
import bcrypt from "bcryptjs";
import genToken from "./tokenGen.js";


const loginUser = asynchandler( async(req, res) => {
    const { email, password } = req.body;

    //validate required fields
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide correct email and password");
    }
    
    //find user by email
    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        throw new Error("User not found, Please sign up!");
    }
    
    //check password
    const passwordIsValid = await bcrypt.compare(password, user.password);

    // generate token
    const token = genToken(user._id);

    if (passwordIsValid) {
        //send cookie to server
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 24 * 60 * 60),
            sameSite:"none",
            secure:true,
        });
    }
    if (user && passwordIsValid){
        const { _id, name, email, photo, bio } = user;
        res.status(200).json({
            _id,
            name,
            email,
            photo,
            bio,
            token,
    });
    }else{
        res.status(400);
        throw new Error("Invalid Email or password");
    }
});

const logOut = asynchandler( async (req, res) => {
    // expire the session
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite:"none",
        secure:true
    });
    return res.status(200).json({ message: "Sucessfully logged out"});
});

export  { loginUser, logOut };
