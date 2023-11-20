import "./Newsletter.css";
import { Buttons } from "../index";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h3>get exclusive offers every day</h3>
        <p>subscribe to our newsletter and stay updated</p>
        <div class="newsletter-input">
          <input type="text" placeholder="Your Email" />
          <Buttons class="btn btn-lg btn-dark">Submit</Buttons>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
