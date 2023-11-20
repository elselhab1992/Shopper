import "./Footer.css";
import logo from "../../Assets/logo_big.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <span>Shopper</span>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/">company</a>
          </li>
          <li>
            <a href="/">products</a>
          </li>
          <li>
            <a href="/">offices</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-icons">
        <FaFacebookSquare className="footer-icon" />
        <FaTwitterSquare className="footer-icon" />
        <FaInstagramSquare className="footer-icon" />
      </div>
      <div className="footer-line" />
      <p>copyright@2023-all rights reserved</p>
    </footer>
  );
};

export default Footer;
