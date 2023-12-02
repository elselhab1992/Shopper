import "./Hero.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import hand from "../../Assets/hand_icon.png";
import hero from "../../Assets/hero_image.png";
import { Buttons } from "../index";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* left side */}
        <div className="hero-left">
          <h2>
            new
            <span className="hand">
              <img src={hand} alt="hand" />
            </span>
            <br />
            collections
            <br /> for everyone
          </h2>
          <Link to="/">
            <Buttons>
              latest collection
              <FaAngleDoubleRight style={{ fontSize: 20, marginLeft: 10 }} />
            </Buttons>
          </Link>
        </div>
        {/* right side */}
        <div className="hero-right">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
