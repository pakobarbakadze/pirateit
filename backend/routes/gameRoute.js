import express from "express";
const router = express.Router();
import { uploadGame, getGame, getAllGames } from "../controllers/gameController";
import { protect, admin } from "../middleware/auth";

router.post("/upload", admin, uploadGame);
router.get("getGame", getGame);
router.get("getAllGames", getAllGames);

export default router;
