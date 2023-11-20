import "./Offers.css";
import offers from "../../Assets/exclusive_image.png";
import { Link } from "react-router-dom";
import { Buttons } from "../index";

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-container">
        {/* left */}
        <div className="offers-left">
          <h2>
            Exclusive
            <br />
            offers for you
          </h2>
          <p>only on best sellers products</p>
          <Link to="/">
            <Buttons>check now</Buttons>
          </Link>
        </div>
        {/* right */}
        <div className="offers-right">
          <img src={offers} alt="offers" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
