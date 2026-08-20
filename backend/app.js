import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/config/mongoos.config.js";
import short_url from "./src/routes/short_url.routes.js";
import { redirectfromShortUrl } from "./src/controller/short_url.controller.js";

dotenv.config({ path: "./.env" });

connectDB();

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/create", short_url);

app.get("/:id", redirectfromShortUrl);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});