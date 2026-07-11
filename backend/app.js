import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongoos.config.js";

dotenv.config("./.env");
connectDB();

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
    const {url} = req.body;
    console.log(url);
    res.send(nanoid(7));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});