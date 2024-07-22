import React, { useState } from "react";
import games from "../../lib/games.json";

const GamesList = () => {
  const [gamesList, setGamesList] = useState([]);
  function organizeByFirstLetter(sports) {
    const result = [];

    const groups = sports.reduce((acc, sport) => {
      const firstLetter = sport.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(sport);
      return acc;
    }, {});

    for (const [firstLetter, games] of Object.entries(groups)) {
      result.push({ first_letter: firstLetter, games });
    }

    return result;
  }

  console.log(organizeByFirstLetter(games));
  return <div>GamesList</div>;
};

export default GamesList;
