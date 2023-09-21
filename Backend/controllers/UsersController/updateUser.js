import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";


const updateUser = asyncHandler( async(req, res) => {
    //find user by user_id
    const user = await User.findById(req.user._id);
    
    //handle error
    if (user) {
        const { name, email, photo, bio } = user;

        user.email = email;
        user.name = req.body.name || name;
        user.phone = req.body.phone || phone;
        user.bio = req.body.bio || bio;
        user.photo = req.body.photo || photo;

        //save new user
        const updatedUser = await user.save();
        
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            bio: updatedUser.bio,
            photo: updatedUser.photo,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

export default updateUser;
