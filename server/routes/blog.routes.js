import { createBlog, getBlogs } from "../controllers/blog.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.route("/createblog/:id").post(verifyJWT, createBlog);
router.route("/getblogs/:id").get(verifyJWT, getBlogs);

export default router;
