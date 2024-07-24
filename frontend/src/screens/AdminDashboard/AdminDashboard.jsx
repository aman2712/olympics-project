import classes from "./AdminDashboard.module.css";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useContext, useEffect, useState } from "react";
import Message from "../../components/Message";
import { AppContext } from "../../context/AppContext";

const AdminDashboard = () => {
  const {
    fetchHotels,
    addHotel,
    hotels,
    players,
    allotHotel,
    fetchPlayers,
    games,
    createEvent,
    allotGame,
    events,
    fetchEvents,
  } = useContext(AppContext);
  const [data, setData] = useState({
    name: "",
    address: "",
    check_in: "",
    check_out: "",
  });
  const [allotingData, setAllotingData] = useState({
    hotelId: hotels[0]?.id,
    userId: players[0]?.id,
  });
  const [eventData, setEventData] = useState({
    game_id: "",
    date: "",
    time: "",
    time_end: "",
    description: "",
  });
  const [gameAllotmentData, setGameAllotmentData] = useState({
    game_id: "",
    user_id: "",
  });
  const [message, setMessage] = useState({ type: "error", text: "" });
  const [allotmentMessage, setAllotmentMessage] = useState({
    type: "error",
    text: "",
  });
  const [eventMessage, setEventMessage] = useState({
    type: "error",
    text: "",
  });
  const [gameAllotmentMessage, setgameAllotmentMessage] = useState({
    type: "error",
    text: "",
  });

  async function handleSubmit() {
    setMessage({ type: "error", text: "" });
    const resp = await addHotel(data);
    if (resp.error) {
      setMessage({ type: "error", text: resp.data.message });
    } else {
      setMessage({ type: "success", text: "Hotel was added in DB" });

      setData({
        name: "",
        address: "",
        check_in: "",
        check_out: "",
      });
      fetchHotels();
    }
  }

  async function handleHotelAllotment() {
    setAllotmentMessage({ type: "error", text: "" });
    const resp = await allotHotel(allotingData);
    if (resp.error) {
      setAllotmentMessage({ type: "error", text: resp.data.message });
    } else {
      setAllotmentMessage({
        type: "success",
        text: "Hotel Alloted successfully",
      });

      setAllotingData({
        userId: "",
        hotelId: "",
      });
      fetchPlayers();
    }
  }

  async function handleEventCreation() {
    setEventMessage({ type: "error", text: "" });
    const resp = await createEvent(eventData);
    if (resp.error) {
      setEventMessage({ type: "error", text: resp.data.message });
    } else {
      setEventMessage({
        type: "success",
        text: "Event created successfully",
      });

      setEventData({
        game_id: "",
        date: "",
        time: "",
        description: "",
      });
    }
    fetchEvents();
  }

  async function handleGameAllotment() {
    setgameAllotmentMessage({ type: "error", text: "" });
    const resp = await allotGame(gameAllotmentData);
    if (resp.error) {
      setgameAllotmentMessage({ type: "error", text: resp.data.message });
    } else {
      setgameAllotmentMessage({
        type: "success",
        text: "Game was allotted successfully",
      });

      setGameAllotmentData({
        game_id: "",
        user_id: "",
      });
    }
    fetchPlayers();
  }

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div className={classes.admin}>
      <h1>Welcome to the Admin Dashboard</h1>
      <Tabs>
        <TabList>
          <Tab>Hotel Settings</Tab>
          <Tab>Players Info</Tab>
          <Tab>Games and Events</Tab>
        </TabList>

        <TabPanel className={classes.hotel_info}>
          <div className={classes.hotels_list}>
            <h1 style={{ marginBottom: "1rem" }}>List of Hotels</h1>
            {hotels.map((hotel) => (
              <div className={classes.hotel_details} key={hotel.id}>
                <h3>{hotel.name}</h3>
                <p className={classes.address}>{hotel.address}</p>
                <p className={classes.timings}>
                  Check In: {hotel.check_in} | Check Out: {hotel.check_out}
                </p>
                <span></span>
              </div>
            ))}
          </div>
          <div className={classes.form_wrapper}>
            <div className={classes.form}>
              <h1 className={classes.formTitle}>Add a Hotel</h1>
              <Message type={message.type} text={message.text} />
              <div className={classes.formInput}>
                <label htmlFor="hotel_name">Name of Hotel: </label>
                <input
                  type="text"
                  placeholder="JW Mariott"
                  id="hotel_name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                ></input>
              </div>
              <div className={classes.formInput}>
                <label htmlFor="address">Hotel Address: </label>
                <input
                  type="text"
                  placeholder="17 Rue de Rivoli Paris 75004"
                  id="address"
                  value={data.address}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                ></input>
              </div>
              <div className={classes.formInput}>
                <label htmlFor="check_in">Check In Time: </label>
                <input
                  type="text"
                  placeholder="9:00 AM"
                  id="check_in"
                  value={data.check_in}
                  onChange={(e) =>
                    setData({ ...data, check_in: e.target.value })
                  }
                ></input>
              </div>
              <div className={classes.formInput}>
                <label htmlFor="check_out">Check Out Time: </label>
                <input
                  type="text"
                  placeholder="10:00 AM"
                  id="check_out"
                  value={data.check_out}
                  onChange={(e) =>
                    setData({ ...data, check_out: e.target.value })
                  }
                ></input>
              </div>
              <button className="primary-btn" onClick={handleSubmit}>
                Add Hotel →
              </button>
            </div>
            <div className={classes.form}>
              <h1 className={classes.formTitle}>Allot a Hotel</h1>
              <Message
                type={allotmentMessage.type}
                text={allotmentMessage.text}
              />
              <div className={classes.formInput}>
                <label htmlFor="hotel">Hotel: </label>
                <select
                  value={allotingData.hotelId}
                  onChange={(e) =>
                    setAllotingData({
                      ...allotingData,
                      hotelId: e.target.value,
                    })
                  }
                  id="hotel"
                >
                  {hotels.map((hotel) => (
                    <option value={hotel?.id} key={hotel?.id}>
                      {hotel?.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="user">Player: </label>
                <select
                  value={allotingData.userId}
                  onChange={(e) =>
                    setAllotingData({ ...allotingData, userId: e.target.value })
                  }
                  id="user"
                >
                  {players.map((player) => (
                    <option value={player?.id} key={player?.id}>
                      {player?.username}
                    </option>
                  ))}
                </select>
              </div>
              <button className="primary-btn" onClick={handleHotelAllotment}>
                Add Hotel →
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={classes.playersList}>
            <table border="2" className={classes.playersTable}>
              <thead className={classes.tableHead}>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>State</th>
                  <th>Game</th>
                  <th>Flight Number</th>
                  <th>Hotel</th>
                  <th>Landing Time</th>
                </tr>
              </thead>
              <tbody className={classes.tableBody}>
                {players.map((item, index) => (
                  <tr key={index}>
                    {Object.entries(item).map(([key, value]) => {
                      if (!value || value === "") {
                        return <td key={key}>Not Added</td>;
                      } else if (key === "game" || key === "hotel_info") {
                        return <td key={key}>{value?.name}</td>;
                      } else if (key === "landing_time") {
                        return (
                          <td key={key}>
                            {new Date(value).toLocaleDateString()} @{" "}
                            {new Date(value).toLocaleTimeString()}
                          </td>
                        );
                      } else {
                        return <td key={key}>{value}</td>;
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel className={classes.hotel_info}>
          <div className={classes.hotels_list}>
            <h1 style={{ marginBottom: "1rem" }}>List of Events</h1>
            {events.map((event) => (
              <div className={classes.hotel_details} key={event.id}>
                <h3>{event.game.name}</h3>
                <p className={classes.address}>{event.description}</p>
                <p className={classes.timings}>
                  Date: {event.date} | Time: {event.time}
                </p>
                <span></span>
              </div>
            ))}
          </div>
          <div className={classes.form_wrapper}>
            <div className={classes.form}>
              <h1 className={classes.formTitle}>Add an Event</h1>
              <Message type={eventMessage.type} text={eventMessage.text} />
              <div className={classes.formInput}>
                <label htmlFor="game">Game: </label>
                <select
                  value={eventData.game}
                  onChange={(e) =>
                    setEventData({ ...eventData, game_id: e.target.value })
                  }
                  id="game"
                >
                  {games.map((game) => (
                    <option value={game?.id} key={game?.id}>
                      {game?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.formInput}>
                <label htmlFor="date">Date: </label>
                <input
                  type="text"
                  placeholder="July 23"
                  id="date"
                  value={eventData.date}
                  onChange={(e) =>
                    setEventData({ ...eventData, date: e.target.value })
                  }
                ></input>
              </div>
              <div className={classes.formInput}>
                <label htmlFor="time">Start Time: </label>
                <input
                  type="text"
                  placeholder="3:30 PM"
                  id="time"
                  value={eventData.time}
                  onChange={(e) =>
                    setEventData({ ...eventData, time: e.target.value })
                  }
                ></input>
              </div>
              <div className={classes.formInput}>
                <label htmlFor="time">End Time: </label>
                <input
                  type="text"
                  placeholder="6:30 PM"
                  id="time"
                  value={eventData.time_end}
                  onChange={(e) =>
                    setEventData({ ...eventData, time_end: e.target.value })
                  }
                ></input>
              </div>
              <div className={classes.formInput}>
                <label htmlFor="description">Description: </label>
                <input
                  type="text"
                  placeholder="Add a description for the event"
                  id="description"
                  value={eventData.description}
                  onChange={(e) =>
                    setEventData({ ...eventData, description: e.target.value })
                  }
                ></input>
              </div>
              <button className="primary-btn" onClick={handleEventCreation}>
                Add Event →
              </button>
            </div>
            <div className={classes.form}>
              <h1 className={classes.formTitle}>Assign a Game</h1>
              <Message
                type={gameAllotmentMessage.type}
                text={gameAllotmentMessage.text}
              />
              <div className={classes.formInput}>
                <div className={classes.formInput}>
                  <label htmlFor="game">Game: </label>
                  <select
                    value={gameAllotmentData.game}
                    onChange={(e) =>
                      setGameAllotmentData({
                        ...gameAllotmentData,
                        game_id: e.target.value,
                      })
                    }
                    id="game"
                  >
                    {games.map((game) => (
                      <option value={game?.id} key={game?.id}>
                        {game?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <label htmlFor="user">Player: </label>
                <select
                  value={gameAllotmentData.user_id}
                  onChange={(e) =>
                    setGameAllotmentData({
                      ...gameAllotmentData,
                      user_id: e.target.value,
                    })
                  }
                  id="user"
                >
                  {players.map((player) => (
                    <option value={player?.id} key={player?.id}>
                      {player?.username}
                    </option>
                  ))}
                </select>
              </div>
              <button className="primary-btn" onClick={handleGameAllotment}>
                Allot Game →
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
