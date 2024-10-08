import {Router} from 'express';
import { adminlogin, adminRegister, login, refreshAccessToken, register } from '../Controllers/user.controller.js';
import { verifyJwt } from '../Middlewares/auth.middleware.js';
import { addlab, getAllLabs, getLabData } from '../Controllers/lab.controller.js';
const router=Router();

router.route("/register").post(register);     
router.route("/login").post(login);  
router.route("/refresh").post(refreshAccessToken);
router.route("/addLab").post(verifyJwt, addlab);
router.route("/getLab").post(verifyJwt,getLabData);
router.route("/getAllLabs").get(getAllLabs)
router.route("/adminlogin").post(adminlogin);
router.route("/adminRegister").post(adminRegister);
export default router;  