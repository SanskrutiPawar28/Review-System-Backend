import { createAdmin, createAlumini, createStudent} from "../controllers/userController.js";
import { getAllUsers } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/companyController.js";
import { createReview, getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likesController.js";
import { isAdmin } from "../middleware/middleware.js";
import express from "express";


const router=express.Router()


router.post("/Admin/create",createAdmin);
router.post("/Alumni/create",createAlumini);
router.post("/Student/create",createStudent);
router.get("/User/get",getAllUsers);
router.post("/Company/create",isAdmin,createCompany);
router.get("/Company/get",getCompanies);
router.post("/review/create",createReview);
router.get("/review/get",getAllReviews);
router.post("/v1/likes/add",likeReviews);

export default router;