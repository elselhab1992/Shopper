// import "./NavBar.css";
// import logo from "../../Assets/logo.png";
// import { BsCart3 } from "react-icons/bs";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [menu, setMenu] = useState("shop");

//   return (
//     <header>
//       <div className="header">
//         <div className="logo">
//           <img src={logo} alt="logo" />
//           <span>shopper</span>
//         </div>
//         <nav>
//           <ul className="nav-menu">
//             <li className="nav-item" onClick={() => setMenu("shop")}>
//               <Link to="/">shop</Link>
//               {menu === "shop" ? <hr /> : <></>}
//             </li>
//             <li className="nav-item" onClick={() => setMenu("women")}>
//               <Link to="/women">Women</Link>
//               {menu === "women" ? <hr /> : <></>}
//             </li>
//             <li className="nav-item" onClick={() => setMenu("men")}>
//               <Link to="/men">Men</Link>
//               {menu === "men" ? <hr /> : <></>}
//             </li>
//             <li className="nav-item" onClick={() => setMenu("kids")}>
//               <Link to="/kids">Kids</Link>
//               {menu === "kids" ? <hr /> : <></>}
//             </li>
//           </ul>
//         </nav>
//         <div className="login">
//           <button>Login</button>
//           <Link to="/cart">
//             <BsCart3 className="cart-icon" />
//           </Link>
//           <div className="cart-count">0</div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavBar;

import "./NavBar.css";
import logo from "../../Assets/logo.png";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>shopper</span>
        </div>
        <nav>
          <ul className="nav-menu">
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
        </nav>
        <div className="login">
          <button>Login</button>
          <Link to="/cart">
            <BsCart3 className="cart-icon" />
          </Link>
          <div className="cart-count">0</div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
