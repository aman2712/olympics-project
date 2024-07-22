import classes from "./Schedule.module.css";
import schedule from "../../lib/schedule.json";
import countries from "../../lib/countries.json";
import EventsList from "../../components/EventsList";

const Schedule = () => {
  const dataHeader = ["Event", "Date", "Time", "Description"];
  const countriesHeader = ["Country", "Players", "Ranking"];
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
          <EventsList data={schedule} dataHeader={dataHeader} />
        </div>
        <div className={classes.countries}>
          <EventsList data={countries} dataHeader={countriesHeader} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
