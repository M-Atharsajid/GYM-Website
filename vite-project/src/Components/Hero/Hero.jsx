import React from "react";
import "./hero.css";
import Header from "../Header/header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  const transition = { type: "spring", duration: "3" };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>

      <div className="Left-h">
        <Header />
        {/* The Best Ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "155px" : "200px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span> experts coachs </span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={900} delay="4" preFix="+" />
            </span>
            <span> members joined </span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={1} delay="4" preFix="+" />
            </span>
            <span> fitness programs </span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="Right-h">
        <Link to="join-us" spy={true} smooth={true} offset={-100} className="btn">
          Join Now
        </Link>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} className="hero-image" alt="Image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "21rem" }}
          transition={transition}
          src={hero_image_back}
          className="image-back"
          alt="Image"
        />

        {/* Calories */}
        <motion.div
          initial={{ right: "35rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Hero;
