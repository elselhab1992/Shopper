import "./Newsletter.css";
import { Buttons } from "../index";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h3>get exclusive offers every day</h3>
        <p>subscribe to our newsletter and stay updated</p>
        <div className="newsletter-input">
          <input type="text" placeholder="Your Email" />
          <Buttons>Submit</Buttons>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
