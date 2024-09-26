import { Router } from "express";
import { addlab } from "../Controllers/lab.controller";

const router=Router();
router.route("/addLab").post(addlab);
export default router;  