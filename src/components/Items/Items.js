import { Link } from "react-router-dom";
import "./Items.css";

const Items = ({ id, name, image, new_price, old_price, category }) => {
  return (
    <section className="items-container">
      <Link to={`/product/${id}`}>
        <img src={image} alt="product" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p>{name}</p>
      <div className="items-price">
        <h6>
          <del>£{old_price}</del>
        </h6>
        <h6>£{new_price}</h6>
      </div>
    </section>
  );
};

export default Items;
