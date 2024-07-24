import classes from "./Schedule.module.css";
import EventsList from "../../components/EventsList";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Schedule = () => {
  const { events, gamePlayers } = useContext(AppContext);
  const dataHeader = ["Event", "Date", "Start Time", "End Time", "Description"];
  const countriesHeader = ["Game", "Players"];
  return (
    <div className={classes.schedule}>
      <div className={classes.scheduleHeader}>
        <h1>Olympic Games Schedule & Events</h1>
        <p>
          Opening Ceremony: 22nd July 2024 • Closing Ceremony: 7th August 2024
        </p>
      </div>
      <div className={classes.scheduleContent}>
        <div className={classes.games}>
          <EventsList data={events} dataHeader={dataHeader} />
        </div>
        <div className={classes.countries}>
          <EventsList data={gamePlayers} dataHeader={countriesHeader} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
