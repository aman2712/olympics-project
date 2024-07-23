import { createContext, useEffect, useState } from "react";
import apiCall from "../utils/api-call";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const resp = await apiCall({
      endpoint: "/games",
      method: "GET",
    });

    if (!resp.error) {
      setGames(resp.data.data);
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
  }, []);

  const value = {
    games,
    updatePlayerData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
