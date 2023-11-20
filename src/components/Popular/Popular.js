/* eslint-disable no-unused-vars */
import "./Popular.css";
import data_product from "../../Data/data";
import { Items } from "../index";

const Popular = () => {
  return (
    <section className="popular">
      <h2>Popular In Women</h2>
      <hr />
      <div className="popular-item">
        {data_product.map((product) => {
          const { id, name, image, new_price, old_price } = product;

          return <Items {...product} key={id} />;
        })}
      </div>
    </section>
  );
};

export default Popular;
