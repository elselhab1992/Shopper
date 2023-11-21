import "./ProductDisplay.css";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import Buttons from "../Buttons/Buttons";

const ProductDisplay = ({
  id,
  name,
  image,
  new_price,
  old_price,
  category,
}) => {
  return (
    <section className="product-display">
      <div className="display-container">
        {/* left */}
        <div className="display-left">
          <div className="side-imgs">
            <img src={image} alt="product" />
            <img src={image} alt="product" />
            <img src={image} alt="product" />
          </div>
          <div className="main-img">
            <img src={image} alt="product" />
          </div>
        </div>
        {/* right */}
        <div className="display-right">
          <h3>{name}</h3>
          <div className="stars">
            <IoMdStar className="star" />
            <IoMdStar className="star" />
            <IoMdStar className="star" />
            <IoMdStar className="star" />
            <MdOutlineStarHalf className="star" />
            <span style={{ marginLeft: 10 }}>(340 reviews)</span>
          </div>
          <div className="prices">
            <p>
              <del>£{old_price}</del>
            </p>
            <p>£{new_price}</p>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              minus iure inventore dolore dolorem ipsam Lorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
            </p>
          </div>
          <div className="sizes">
            <h6>Select Size</h6>
            <div className="size">
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
            </div>
          </div>
          <Buttons>add to cart</Buttons>
          <div className="product-category">
            <p>
              <span>category:</span> {category}
            </p>
            <p>
              <span>Tags:</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
