import { createContext, useEffect, useState } from "react";
import apiCall from "../utils/api-call";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [players, setPlayers] = useState([]);
  const [events, setEvents] = useState([]);
  const [gamePlayers, setGamePlayers] = useState([]);

  const fetchGames = async () => {
    const resp = await apiCall({
      endpoint: "/games",
      method: "GET",
    });

    if (!resp.error) {
      setGames(resp.data.data);
    }
  };

  const fetchHotels = async () => {
    const resp = await apiCall({
      endpoint: "/hotels",
      method: "GET",
      secured: true,
    });

    if (!resp.error) {
      setHotels(resp.data.data);
    }
  };

  const fetchPlayers = async () => {
    const resp = await apiCall({
      endpoint: "/players",
      method: "GET",
      secured: true,
    });

    if (!resp.error) {
      setPlayers(resp.data.data);
    }
  };

  const fetchEvents = async () => {
    const resp = await apiCall({
      endpoint: "/games/events",
      method: "GET",
      secured: true,
    });

    if (!resp.error) {
      setEvents(resp.data.data);
    }
  };

  const fetchGameAndPlayers = async () => {
    const resp = await apiCall({
      endpoint: "/games/game-players",
      method: "GET",
    });

    if (!resp.error) {
      setGamePlayers(resp.data.data);
    }
  };

  const addHotel = async (body) => {
    const resp = await apiCall({
      endpoint: "/hotels",
      method: "POST",
      secured: true,
      body,
    });

    if (!resp.error) {
      return "SUCCESS!";
    } else {
      return resp;
    }
  };

  const createEvent = async (body) => {
    const resp = await apiCall({
      endpoint: "/games/create-event",
      method: "POST",
      secured: true,
      body,
    });

    if (!resp.error) {
      return "SUCCESS!";
    } else {
      return resp;
    }
  };

  const allotHotel = async (body) => {
    const resp = await apiCall({
      endpoint: "/hotels/info",
      method: "PUT",
      secured: true,
      body,
    });

    if (!resp.error) {
      return "SUCCESS!";
    } else {
      return resp;
    }
  };

  const allotGame = async (body) => {
    const resp = await apiCall({
      endpoint: "/players/allot",
      method: "PUT",
      secured: true,
      body,
    });

    if (!resp.error) {
      return "SUCCESS!";
    } else {
      return resp;
    }
  };

  const updatePlayerData = async (body) => {
    const resp = await apiCall({
      endpoint: "/players/player-info",
      method: "PUT",
      secured: true,
      body,
    });

    if (!resp.error) {
      return "SUCCESS!";
    } else {
      return resp;
    }
  };

  useEffect(() => {
    fetchGames();
    fetchHotels();
    fetchPlayers();
    fetchEvents();
    fetchGameAndPlayers();
  }, []);

  const value = {
    games,
    updatePlayerData,
    fetchHotels,
    addHotel,
    hotels,
    players,
    allotHotel,
    fetchPlayers,
    createEvent,
    allotGame,
    fetchEvents,
    events,
    gamePlayers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
