import User from "../../models/userModel.js";
import asynchandler from "express-async-handler";

const getUser = asynchandler(async (req, res) => {

const user = await User.findById(req.user._id);

    //error handling for user
    if(user){
        const { _id, name, email, password, photo, phone, bio} = user;
        res.status(200).json({
            _id,
            name,
            email,
            password,
            photo,
            phone,
            bio,
    });
} else { 
    res.status(404);
    throw new Error("User not found");
}  
});

export default getUser;
