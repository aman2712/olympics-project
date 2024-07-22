import classes from "./Navbar.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="Olympics | Logo" />
      </div>
      <div className={classes.navLinks}>
        <Link to="/">
          Home <span></span>
        </Link>
        <Link to="/about">
          About <span></span>
        </Link>
        <Link to="/contact">
          Contact <span></span>
        </Link>
        <Link to="/games">
          Games <span></span>
        </Link>
        <Link to="/support">
          Support <span></span>
        </Link>
      </div>
      <button className="primary-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
