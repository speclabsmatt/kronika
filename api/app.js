import dotenv from "dotenv";
import express from "express";
import blog from "./routers/blog.js";
import path from "path";
import { fileURLToPath } from 'url';
import { mongoose } from "./services/mongoose.service.js";
import Schema from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../ui/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../ui/build", "index.html"));
  });
}

export default app;
