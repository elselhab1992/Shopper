/* eslint-disable no-unused-vars */
import "./NewCollections.css";
import new_collections from "../../Data/new_collections";
import { Items } from "../index";

const NewCollections = () => {
  return (
    <section className="collections">
      <h2>new collections</h2>
      <hr />
      <div className="new-collections">
        {new_collections.map((collection) => {
          const { id, name, image, new_price, old_price } = collection;

          return <Items {...collection} key={id} />;
        })}
      </div>
    </section>
  );
};

export default NewCollections;
