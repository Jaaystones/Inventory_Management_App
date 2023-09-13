import express from 'express';
import registerUser from '../controllers/registerUser.js';
import { loginUser, logOut }  from '../controllers/logInLogOutUser.js';
import getUser from '../controllers/getUsers.js';
import Secure from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logOut);
router.get('/getuser', Secure, getUser);

export default router;