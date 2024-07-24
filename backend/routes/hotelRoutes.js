import express from "express";
const router = express.Router();
import {
  addHotel,
  allotHotel,
  getHotels,
} from "../controllers/hotelController.js";
import { checkAdmin, checkToken } from "../middlewares/authMiddleware.js";

router
  .route("/")
  .post(checkToken, checkAdmin, addHotel)
  .get(checkToken, checkAdmin, getHotels);
router.route("/info").put(checkToken, checkAdmin, allotHotel);

export default router;
