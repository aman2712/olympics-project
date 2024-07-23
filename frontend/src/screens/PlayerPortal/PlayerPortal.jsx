import { useContext, useState } from "react";
import classes from "./PlayerPortal.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { AuthContext } from "../../context/AuthContext";
import Message from "../../components/Message";

const PlayerPortal = () => {
  const { games, updatePlayerData } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    flight_number: "",
    landing_time: "",
    state: "",
    game: "1",
  });

  async function handleSubmit() {
    setMessage("");
    const resp = await updatePlayerData(data);
    if (resp.error) {
      setMessage(resp.data.message);
    } else {
      setData({
        flight_number: "",
        landing_time: "",
        state: "",
        game: "1",
      });
    }
  }

  return (
    <div className={classes.portal}>
      <h1>How's the spirit, {user?.username}?</h1>
      <p>
        This is your player portal, you can access crucial information about
        your participation in Paris Olympics 2024 on this page, but first, we
        need some information from you to arrange for your travel and
        accomodation in Paris
      </p>
      <div className={classes.portalContent}>
        <div className={classes.sidebar}>
          <Link to="/" className={classes.link}>
            Accomodation
          </Link>
          <Link to="/" className={classes.link}>
            Logout
          </Link>
          <Link to="/" className={classes.link}>
            Your profile
          </Link>
          <Link to="/" className={classes.link}>
            Settings
          </Link>
        </div>
        <div className={classes.main}>
          <div className={classes.form}>
            <h1 className={classes.formTitle}>Travel Info</h1>
            <Message text={message} />
            <div className={classes.formInput}>
              <label htmlFor="flight-number">Flight Number: </label>
              <input
                type="text"
                placeholder="6E 9181"
                id="flight-number"
                value={data.flight_number}
                onChange={(e) =>
                  setData({ ...data, flight_number: e.target.value })
                }
              ></input>
            </div>
            <div className={classes.formInput}>
              <label htmlFor="landing-time">Landing Time: </label>
              <input
                type="text"
                placeholder="2024-06-22 3:24 PM"
                id="landing-time"
                value={data.landing_time}
                onChange={(e) =>
                  setData({ ...data, landing_time: e.target.value })
                }
              ></input>
            </div>
            <div className={classes.formInput}>
              <label htmlFor="landing-time">State: </label>
              <input
                type="text"
                placeholder="Pennsylvania"
                id="Your state"
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
              ></input>
            </div>
            <div className={classes.formInput}>
              <label htmlFor="game">Game: </label>
              <select
                value={data.game}
                onChange={(e) => setData({ ...data, game: e.target.value })}
                id="game"
              >
                {games.map((game) => (
                  <option value={game?.id} key={game?.id}>
                    {game?.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="primary-btn" onClick={handleSubmit}>
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPortal;
