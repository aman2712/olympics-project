import classes from "./Navbar.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="Olympics | Logo" />
      </div>
      <div className={classes.navLinks}>
        <Link to="/">
          Home <span></span>
        </Link>
        <Link to="#about">
          About <span></span>
        </Link>
        <Link to="/contact">
          Contact <span></span>
        </Link>
        <Link to="/games-list">
          Games <span></span>
        </Link>
        <Link to="/support">
          Support <span></span>
        </Link>
      </div>
      {user ? (
        <Link to="/player-portal">
          <button className="primary-btn">Dashboard</button>
        </Link>
      ) : (
        <Link to="/auth">
          <button className="primary-btn">Sign Up</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
