import express from "express";
const router = express.Router();
import {
  addSupportingInfo,
  allotGame,
  getAllPlayers,
} from "../controllers/playerController.js";
import { checkAdmin, checkToken } from "../middlewares/authMiddleware.js";

router.route("/").get(checkToken, checkAdmin, getAllPlayers);
router.route("/player-info").put(checkToken, addSupportingInfo);
router.route("/allot").put(checkToken, checkAdmin, allotGame);

export default router;
