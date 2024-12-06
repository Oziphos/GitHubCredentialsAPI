import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import githubRoutes from "./routes/githubApiRoutes.js";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "/")));

app.get("/", (req, res) => {
  res.sendFile("/pages/index.html", { root: __dirname });
});

app.use("/api", githubRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
