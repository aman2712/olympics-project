import classes from "./Footer.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.footerLogo}>
          <img src={logo} alt="logo" />
          <p>PARIS 2024 OLYMPICS</p>
        </div>
        <div className={classes.footerContent}>
          <p className={classes.footerAbout}>
            The Olympics is a global multi-sport event that takes place every
            four years, featuring summer and winter games. It brings together
            athletes from around the world to compete in various sports,
            promoting unity, excellence, and fair play. The modern Olympics,
            inspired by ancient Greek traditions, celebrate human potential and
            international cooperation.
          </p>
          <div className={classes.footerLinks}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/games">Games</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>&copy; 2024 Paris Summer Olympics</p>
        <div className={classes.footerIcons}>
          <FaFacebookSquare />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
