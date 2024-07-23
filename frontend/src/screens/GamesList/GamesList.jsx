import React, { useEffect, useState, useContext } from "react";
import classes from "./GamesList.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const GamesList = () => {
  const { games } = useContext(AppContext);
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

  useEffect(() => {
    setGamesList(organizeByFirstLetter(games));
  }, [games]);
  return (
    <div className={classes.gamesList}>
      <h1>
        Explore the Games which are a part of <span>Paris 2024</span>
      </h1>
      <div className={classes.gamesContainer}>
        {gamesList.map((game, index) => (
          <div className={classes.game} key={index}>
            <h1>{game.first_letter}</h1>
            {game.games.map((innerGame) => (
              <Link to={`/games/${innerGame.id}`} key={innerGame.id}>
                {innerGame.name}
              </Link>
            ))}
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesList;
