import "./Shop.css";
import {
  Hero,
  Popular,
  Offers,
  NewCollections,
  Newsletter,
} from "../../components/index";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </>
  );
};

export default Shop;
