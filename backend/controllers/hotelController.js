import fieldValidator from "../helpers/fieldValidator.js";
import { sendError, sendSuccess } from "../helpers/helper.js";
import prisma from "../prisma/index.js";
import { ERROR, SUCCESS, UNACCEPTABLE } from "../utils/key.js";

/**
 * for admin to add all hotels alloted for event
 * method: post
 * url: /api/hotels
 * secured: true | admin
 *
 * @returns {Object} hotel - created hotel details
 */
export const addHotel = async (req, res) => {
  try {
    const { name, address, check_in, check_out } = req.body;

    const check = fieldValidator({ name, address, check_in, check_out });
    if (check.error) {
      return sendError(res, UNACCEPTABLE, "All fields are required");
    }

    const hotel = await prisma.hotelInfo.create({
      data: {
        name,
        address,
        check_in,
        check_out,
      },
    });

    return sendSuccess(res, SUCCESS, "Hotel info added successfully", hotel);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server error");
  }
};

/**
 * for admin to get list of all hotels added
 * method: get
 * url: /api/hotels
 * secured: true | admin
 *
 * @returns {Object} hotel - created hotel details
 */
export const getHotels = async (req, res) => {
  try {
    const hotels = await prisma.hotelInfo.findMany();

    return sendSuccess(res, SUCCESS, "List of hotels", hotels);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};

/**
 * for admin to allot a hotel to a candidate
 * method: put
 * url: /api/hotels/info
 * secured: true | admin
 *
 * @returns {Object} message - success message
 */
export const allotHotel = async (req, res) => {
  try {
    const { userId, hotelId } = req.body;
    console.log(req.body);

    const check = fieldValidator({ userId, hotelId });
    if (check.error) {
      return sendError(res, UNACCEPTABLE, "All fields are required");
    }

    await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        hotel_id: Number(hotelId),
      },
    });

    return sendSuccess(res, SUCCESS, "Hotel alloted successfully");
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};
