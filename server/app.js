import express from "express";
import cors from "cors";
import { cors_orgin } from "./constants.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: cors_orgin,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import contactPageRouter from "./routes/contactPage.routes.js";
import blogRouter from "./routes/blog.routes.js";
app.use("/contact", contactPageRouter);

app.use("/users", userRouter);

app.use("/blogs", blogRouter);
export { app };
