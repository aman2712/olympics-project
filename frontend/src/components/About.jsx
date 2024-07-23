import classes from "../screens/Home/Home.module.css";
import aboutImg from "../images/about-img.jpg";

const About = () => {
  return (
    <section className={classes.about} id="about">
      <div className={classes.aboutContent}>
        <div className={classes.aboutImg}>
          <img src={aboutImg} alt="about" />
        </div>
        <div className={classes.aboutInfo}>
          <p>
            ABOUT <span></span>
          </p>
          <h1>What is the Olympics?</h1>
          <article>
            The Olympics is a global multi-sport event that takes place every
            four years, featuring summer and winter games. It brings together
            athletes from around the world to compete in various sports,
            promoting unity, excellence, and fair play. The modern Olympics,
            inspired by ancient Greek traditions, celebrate human potential and
            international cooperation. The Games are organized by the
            International Olympic Committee (IOC) and are viewed by millions
            worldwide. The Olympics also highlight cultural exchange and foster
            a spirit of peace and solidarity among nations.
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
