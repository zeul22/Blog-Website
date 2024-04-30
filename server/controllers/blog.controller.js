import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Blog } from "../models/Blog.model.js";

const createBlog = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;
  const { title, description } = req.body;
  const newBlog = await Blog.create({
    userId,
    title,
    description,
  });
  if (!newBlog) {
    throw new ApiError(500, "Something went wrong while creating the blog");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, newBlog, "Blog Created Successfully"));
});

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const { id: userId } = req.params;
    const blog = await Blog.find({ userId });

    res.status(200).json(blog);
  } catch (error) {
    console.log(error.message);
    throw new ApiError(401, "Internal Server Error");
  }
});

export { createBlog, getBlogs };
