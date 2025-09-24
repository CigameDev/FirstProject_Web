import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();//load biến từ .env vào process.env

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();//chạy ra ngoài thư mục cài đặt express
app.use(express.json()); //allows us to accept JSON data in the req.body
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/FE/dist")));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "/FE/dist/index.html"));
  });
} else {
  console.log("Chay tren 5173");
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server started at PORT: ${PORT}`)
});