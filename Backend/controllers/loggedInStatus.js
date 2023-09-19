import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

//Get the login status 
const loggedInStatus = asyncHandler(async (req, res) => {

    const token =req.cookies.token;
    //validation error
    if(!token){
        return res.json(false);
    }
    
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // return boolean response
    if (decoded) {
        return res.json(true);
}
    return res.json(false);
});

export default loggedInStatus;
