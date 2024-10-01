import {Router} from 'express';
import { createIssue,getIssue, getUserIssue, handleIssue } from '../Controllers/issueController.js';
import { verifyJwt } from '../Middlewares/auth.middleware.js';
const router =Router() 
router.route("/").post(verifyJwt,createIssue);
router.route("/").get(getIssue);
router.route("/resolve").post(verifyJwt, handleIssue);
router.route("/userIssue").post(verifyJwt, getUserIssue);
export default router;  