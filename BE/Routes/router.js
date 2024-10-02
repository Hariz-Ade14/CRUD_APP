import express from "express";
import { signUp,Login,Logout,deleteReq,bookAppointment} from "../Controllers/requests.js";
const router = express.Router();

router.post("/signup",signUp);
router.post("/login",Login);
router.post("/logout",Logout);
router.post("/bookings",bookAppointment);
router.delete("/",deleteReq);

export {router};