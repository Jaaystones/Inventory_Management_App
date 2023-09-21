import express from 'express';
import registerUser from '../controllers/UsersController/registerUser.js';
import { loginUser, logOut }  from '../controllers/logInLogOutUser.js';
import getUser from '../controllers/UsersController/getUsers.js';
import Secure from '../middleware/authMiddleware.js';
import loggedInStatus from '../controllers/loggedInStatus.js';
import updateUser from '../controllers/UsersController/updateUser.js';
import { updatePassword, forgotPassword, resetPassword } from '../controllers/passwordController.js';



const router = express.Router();

//Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuser', Secure, getUser);
router.get('/logout', logOut);
router.get('/loggedin', loggedInStatus);
router.patch('/updateuser', Secure, updateUser);
router.patch('/updatepassword', Secure, updatePassword);
router.post('/forgotpassword',  forgotPassword);
router.put('/resetpassword/:resetToken',  resetPassword);

export default router; 
