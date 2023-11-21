import "./CartItem.css";
import { useGlobalContext } from "../../Context/Context";
import { FaTimes } from "react-icons/fa";
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillMinusSquare } from "react-icons/ai";

const CartItem = ({ id, name, new_price, image }) => {
  const { cartItems, updateCartAmount, addToCart, removeFromCart } =
    useGlobalContext();

  return (
    <section className="shopping-cart">
      <div className="cart-container">
        <div className="cart-headings">
          <p>products</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <hr />
        <div className="cart-content">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p>£{new_price}</p>
          <div className="cart-btns">
            <AiFillMinusSquare
              onClick={() => removeFromCart(id)}
              className="cart-icons"
            />
            <button className="cart-quantity">{cartItems[id]}</button>
            <RiAddBoxFill
              onClick={() => addToCart(id)}
              className="cart-icons"
            />
          </div>
          <p>£{new_price * cartItems[id]}</p>
          <FaTimes onClick={() => removeFromCart(id)} className="cart-icons" />
        </div>
        <hr />
      </div>
      {/* <div className="item-container">
            <input
              id="amount"
              name="amount"
              value={cartItems[id]}
              onChange={(e) => updateCartAmount(e.target.value, id)}
            />
      </div> */}
    </section>
  );
};

export default CartItem;
