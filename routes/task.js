import express  from "express";
import { newtask,getmytask,updatetask,deletetask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();


router.post("/tasks/new",isAuthenticated,newtask);
router.get("/tasks/my",isAuthenticated,getmytask);
router.route("/tasks/:id").put(isAuthenticated,updatetask);
router.route("/tasks/:id").delete(isAuthenticated,deletetask);


export default router;
