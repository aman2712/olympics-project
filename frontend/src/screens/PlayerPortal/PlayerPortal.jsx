import classes from "./PlayerPortal.module.css";
import { Link } from "react-router-dom";

const PlayerPortal = () => {
  return (
    <div className={classes.portal}>
      <h1>How's the spirit, Josh?</h1>
      <p>
        This is your player portal, you can access crucial information about
        your participation in Paris Olympics 2024 on this page, but first, we
        need some information from you to arrange for your travel and
        accomodation in Paris
      </p>
      <h2>Your details</h2>
      <div className={classes.portalContent}>
        <div className={classes.sidebar}>
          <Link to="/" className={classes.link}>
            Accomodation
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
            <div className={classes.formInput}>
              <label htmlFor="flight-number">Flight Number: </label>
              <input
                type="text"
                placeholder="6E 9181"
                name="flight-number"
              ></input>
            </div>
            <div className={classes.formInput}>
              <label htmlFor="landing-time">Landing Time: </label>
              <input
                type="text"
                placeholder="3:24 PM"
                name="landing-time"
              ></input>
            </div>
            <button className="primary-btn">Continue →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPortal;
