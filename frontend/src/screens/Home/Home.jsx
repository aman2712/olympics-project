import About from "../../components/About";
import Banner from "../../components/Banner";
import LatestEvents from "../../components/LatestEvents";
import Quote from "../../components/Quote";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Banner />
      <About />
      <Quote />
      <LatestEvents />
    </div>
  );
};

export default Home;
