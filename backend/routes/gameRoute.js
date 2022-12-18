import express from "express";
const router = express.Router();
import { uploadGame, getGame, getAllGames } from "../controllers/gameController.js";
import { protect, admin } from "../middleware/auth.js";

router.post("/upload", protect, admin, uploadGame);
router.get("/getGame", getGame);
router.get("/getAllGames", getAllGames);

export default router;
