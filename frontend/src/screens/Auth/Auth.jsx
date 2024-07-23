import { useContext, useEffect, useState } from "react";
import classes from "./Auth.module.css";
import { AuthContext } from "../../context/AuthContext";
import Message from "../../components/Message";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const { register, login, user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState({});
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setResponse({});
    if (signUp) {
      const resp = await register(data);
      setResponse(resp);
    } else {
      const resp = await login(data);
      setResponse(resp);
    }
  }

  useEffect(() => {
    if (response?.error) {
      setMessage(response.data.message);
    }
  }, [response]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={classes.auth}>
      <form className={classes.authForm}>
        <h1 className={classes.authTitle}>
          Sign {signUp ? "Up" : "In"} to continue
        </h1>
        <Message text={message} />
        {signUp && (
          <div className={classes.formInput}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              placeholder="John Doe"
              id="username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            ></input>
          </div>
        )}
        <div className={classes.formInput}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="sample@email.com"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          ></input>
        </div>
        <div className={classes.formInput}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="**********"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          ></input>
        </div>
        <button className="primary-btn" onClick={handleSubmit}>
          Continue →
        </button>
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
