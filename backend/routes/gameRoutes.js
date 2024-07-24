import express from "express";
import {
  createEvent,
  getEvents,
  getGamePlayersData,
  getListOfGames,
  getSingleGame,
} from "../controllers/gamesController.js";
import { checkAdmin, checkToken } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(getListOfGames);
router.route("/single/:id").get(getSingleGame);
router.route("/create-event").post(checkToken, checkAdmin, createEvent);
router.route("/events").get(checkToken, checkAdmin, getEvents);
router.route("/game-players").get(getGamePlayersData);

export default router;
