/* eslint-disable no-unused-vars */
import "./Category.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGlobalContext } from "../../Context/Context";
import { Items } from "../../components";

const Category = ({ categories, banner }) => {
  const { products } = useGlobalContext();

  return (
    <section className="category">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="category-top">
        <p>
          <span style={{ fontWeight: "bold" }}>showing 1-12 </span>out of 36
          products
        </p>
        <div className="dropdown">
          <span>sort by</span> <RiArrowDropDownLine style={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="category-products">
        {products.map((product) => {
          const { id, name, category, image, new_price, old_price } = product;

          if (categories === category) {
            return <Items {...product} key={id} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="show-more">
        <p>show more</p>
      </div>
    </section>
  );
};

export default Category;
