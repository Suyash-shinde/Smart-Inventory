import {Router} from 'express';
import { login, refreshAccessToken, register } from '../Controllers/user.controller.js';
import { verifyJwt } from '../Middlewares/auth.middleware.js';
import { addlab } from '../Controllers/lab.controller.js';
const router=Router();

router.route("/register").post(register);     
router.route("/login").post(login);  
router.route("/refresh").post(refreshAccessToken);
router.route("/addLab").post(verifyJwt, addlab);
export default router;  