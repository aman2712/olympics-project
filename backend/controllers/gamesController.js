import { sendError, sendSuccess } from "../helpers/helper.js";
import prisma from "../prisma/index.js";
import { ERROR, NOTFOUND, SUCCESS } from "../utils/key.js";
import fieldValidator from "../helpers/fieldValidator.js";

/**
 * To get list of all games
 * method: get
 * url: /api/games
 * secured: false
 *
 * @returns {Array} games - list of all games in event
 */
export const getListOfGames = async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        types: true,
      },
    });

    return sendSuccess(res, SUCCESS, "List of games", games);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};

/**
 * To get details of single game
 * method: get
 * url: /api/games/single/:id
 * secured: false
 *
 * @returns {Object} game - details of single game
 */
export const getSingleGame = async (req, res) => {
  try {
    const id = req.query.id;
    const game = await prisma.game.findUnique({
      where: {
        id,
      },
      include: {
        types: true,
      },
    });

    if (!game) {
      return sendError(res, NOTFOUND, "No such game exists!");
    }

    return sendSuccess(res, SUCCESS, "Game found", game);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};

// /api/games/create-event
export const createEvent = async (req, res) => {
  try {
    const { game_id, date, time, time_end, description } = req.body;

    const check = fieldValidator({
      game_id,
      date,
      time,
      time_end,
      description,
    });
    if (check.error) {
      return sendError(res, UNACCEPTABLE, "All fields are required");
    }

    const event = await prisma.event.create({
      data: {
        game_id: Number(game_id),
        date,
        time,
        time_end,
        description,
      },
    });

    return sendSuccess(res, SUCCESS, "Event created sucessfully", event);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};

// /api/games/events
export const getEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      select: {
        game: true,
        date: true,
        time: true,
        time_end: true,
        description: true,
      },
    });

    return sendSuccess(res, SUCCESS, "List of events", events);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};

export const getGamePlayersData = async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        user: true, // Include users to count them
      },
    });

    const gamePlayerCounts = games.map((game) => ({
      gameName: game.name,
      playerCount: game.user.length,
    }));

    return sendSuccess(res, SUCCESS, "Game Players data", gamePlayerCounts);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};
