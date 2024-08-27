import {Router} from 'express';
import { createIssue,getIssue } from '../Controllers/issueController.js';
import { verifyJwt } from '../Middlewares/auth.middleware.js';
const router =Router() 
router.route("/").post(verifyJwt,createIssue);
router.route("/").get(getIssue);

export default router;  