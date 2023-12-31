import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./NavBar.css";
import { Buttons } from "../index";
import { useGlobalContext } from "../../Context/Context";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useGlobalContext();

  const totalCartItems = getTotalCartItems();

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <span>shopper</span>
          </Link>
        </div>
        {/* desktop links */}
        <ul className="desktop-links">
          <li className="nav-item" onClick={() => setMenu("shop")}>
            <Link to="/">shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li className="nav-item" onClick={() => setMenu("women")}>
            <Link to="/women">Women</Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li className="nav-item" onClick={() => setMenu("men")}>
            <Link to="/men">Men</Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li className="nav-item" onClick={() => setMenu("kids")}>
            <Link to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        {/* mobile links */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <div className="login">
              <Link to="/cart" onClick={closeMenu}>
                cart
                <BsCart3 className="cart-icon" />
              </Link>
              <div className="cart-count">{totalCartItems}</div>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/women" onClick={closeMenu}>
              women
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/men" onClick={closeMenu}>
              men
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kids" onClick={closeMenu}>
              kids
            </Link>
          </li>
        </ul>
        <div className="login login-cart">
          <Buttons>Login</Buttons>
          <Link to="/cart">
            <BsCart3 className="cart-icon" />
          </Link>
          <div className="cart-count">{totalCartItems}</div>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes
              size={30}
              style={{ color: "#000" }}
              className="menu-icon"
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              style={{ color: "#000" }}
              className="menu-icon"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
