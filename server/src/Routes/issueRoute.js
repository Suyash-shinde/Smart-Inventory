import {Router} from 'express';
import { createIssue } from '../Controllers/issueController.js';
const router =Router() 
router.route("/").post(createIssue);


export default router;