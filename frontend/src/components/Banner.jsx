import classes from "../screens/Home/Home.module.css";
import bannerImg from "../images/banner-img.jpg";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerContent}>
        <p>PARIS OLYMPICS 2024</p>
        <h1>Uniting the World Through the Power of Sports</h1>
        <button className="primary-btn">Learn more →</button>
      </div>
      <div className={classes.bannerImg}>
        <img src={bannerImg} alt="Olympics | banner" />
      </div>
    </div>
  );
};

export default Banner;
