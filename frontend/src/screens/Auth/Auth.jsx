import { useState } from "react";
import classes from "./Auth.module.css";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className={classes.auth}>
      <form className={classes.authForm}>
        <h1 className={classes.authTitle}>
          Sign {signUp ? "Up" : "In"} to continue
        </h1>
        {signUp && (
          <div className={classes.formInput}>
            <label htmlFor="email">Name: </label>
            <input type="text" placeholder="John Doe" name="email"></input>
          </div>
        )}
        <div className={classes.formInput}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="sample@email.com"
            name="email"
          ></input>
        </div>
        <div className={classes.formInput}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="**********"
            name="password"
          ></input>
        </div>
        <button className="primary-btn">Continue →</button>
        {signUp ? (
          <p className={classes.bottomText}>
            Already have an account?{" "}
            <span onClick={() => setSignUp(!signUp)}>Sign In!</span>
          </p>
        ) : (
          <p className={classes.bottomText}>
            Don't have an account?{" "}
            <span onClick={() => setSignUp(!signUp)}>Sign Up!</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Auth;
