import {Router} from 'express';
import { createIssue,getIssue } from '../Controllers/issueController.js';
const router =Router() 
router.route("/").post(createIssue);
router.route("/").get(getIssue);

export default router;