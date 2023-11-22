/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import "./Cart.css";
import { useGlobalContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import { CartItem } from "../../components/index";
import { Buttons } from "../../components/index";

const Cart = () => {
  const { products, cartItems, cartSubtotal } = useGlobalContext();

  const navigate = useNavigate();
  const subTotal = cartSubtotal();

  return (
    <section className="cart-container-summary">
      <div className="cart-items">
        {products.map((product) => {
          const { id, name, new_price, image } = product;
          if (cartItems[id] !== 0) {
            return <CartItem key={id} {...product} />;
          }
        })}
      </div>
      <div className="checkout">
        {subTotal > 0 ? (
          <div className="cart-total-container">
            {/* left */}
            <div className="total-content">
              <h4>order summary</h4>
              <div className="order-summary">
                <h6>subtotal</h6>
                <span>£{subTotal}</span>
              </div>
              <hr />
              <div className="order-summary">
                <h6>shipping</h6>
                <span>free</span>
              </div>
              <hr />
              <div className="order-summary">
                <h6>order total</h6>
                <span>£{subTotal}</span>
              </div>
            </div>
            {/* right */}
            <div className="promo">
              <p>have a discount code ?</p>
              <div className="promo-input">
                <input type="text" placeholder="Enter code here" />
                <Buttons>Apply Code</Buttons>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <Link to="/">
              <Buttons>Go Shopping</Buttons>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
