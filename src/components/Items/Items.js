import "./Items.css";

const Items = ({ id, name, image, new_price, old_price }) => {
  return (
    <section className="items-container">
      <img src={image} alt="product" />
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
