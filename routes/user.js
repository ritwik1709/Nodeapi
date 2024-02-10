import  express  from "express";
import { getme,register,login,logout } from "../controllers/user.js";
import {isAuthenticated} from "../middlewares/auth.js";

const router=express.Router();



router.get("/users/logout",logout);
router.get("/users/me",isAuthenticated,getme);
router.post("/users/register",register);
router.post("/users/login",login);

export default router;
