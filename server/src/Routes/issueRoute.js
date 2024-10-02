import {Router} from 'express';
import { createIssue,getIssue,getIssueId } from '../Controllers/issueController.js';
import { verifyJwt } from '../Middlewares/auth.middleware.js';
const router =Router() 
router.route("/").post(verifyJwt,createIssue);
router.route("/").get(getIssue);
router.route("/getIssue").post(getIssueId);

export default router;  