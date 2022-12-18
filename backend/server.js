import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoute.js";
import gameRoutes from "./routes/gameRoute.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/games", gameRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
