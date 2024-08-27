import {Router} from 'express';
import { login, refreshAccessToken, register } from '../Controllers/user.controller.js';
const router=Router();

router.route("/register").post(register);     
router.route("/login").post(login);  
router.route("/refresh").post(refreshAccessToken);
export default router;  