import classes from "../screens/Home/Home.module.css";
import events1 from "../images/events-1.jpg";
import events2 from "../images/events-2.jpg";
import events3 from "../images/events-3.jpg";

const LatestEvents = () => {
  return (
    <div className={classes.latestEvents}>
      <p>
        LATEST EVENTS <span></span>
      </p>
      <h1>Latest Olympic Highlights</h1>
      <div className={classes.cards}>
        <div className={classes.card}>
          <div className={classes.cardImg}>
            <img src={events1} alt="latest events" />
            <p>May 31, 2024</p>
          </div>
          <div className={classes.cardContent}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <button className="primary-btn">Read More →</button>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardImg}>
            <img src={events2} alt="latest events" />
            <p>June 05, 2024</p>
          </div>
          <div className={classes.cardContent}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <button className="primary-btn">Read More →</button>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardImg}>
            <img src={events3} alt="latest events" />
            <p>March 16, 2024</p>
          </div>
          <div className={classes.cardContent}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <button className="primary-btn">Read More →</button>
          </div>
        </div>
      </div>
      <button className="primary-btn">More posts →</button>
    </div>
  );
};

export default LatestEvents;
