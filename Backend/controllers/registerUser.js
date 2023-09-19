import User from "../models/userModel.js";
import asynchandler from "express-async-handler";
import genToken from "./tokenGen.js";


const registerUser =  asynchandler(async (req, res) => {
    const { name, email, password } = req.body;

    // validation error
    if (!name ||!email ||!password) {
        res.status(400);
        throw new Error ("Please input all fields" );
    }
    if (password.length < 6) {
        res.status(400)
        throw new Error ("Password must be at least 6 characters long");
    }
    // check if user already exists by mail address
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400)
        throw new Error ("User already exists");
    }

    // create new user
    const user = await User.create({
        name,
        email,
        password
    });
    
    //generate token
    const token = genToken(user._id);

    //send Http-only cookies
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 24 * 60 * 60 ), // expires 1day after
        sameSite: "none",
        secure: true
    });

    if (user) {
        const { _id, name, email, photo, phone, bio } = user;
        res.status(201).json({
            _id,
            name,
            email,
            photo,
            phone,
            bio,
            token
    });
    } else {
        res.status(400)
        throw new Error ("Invalid user");
    }
});

export default registerUser;
