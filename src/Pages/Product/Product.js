import "./Product.css";
import { useGlobalContext } from "../../Context/Context";
import { useParams } from "react-router-dom";
import {
  BreadCrumb,
  ProductDisplay,
  ProductDescription,
  SimilarProducts,
} from "../../components/index";

const Product = () => {
  const { products } = useGlobalContext();

  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));

  return (
    <section className="single-product">
      <BreadCrumb product={product} />
      <ProductDisplay {...product} />
      <ProductDescription />
      <SimilarProducts />
    </section>
  );
};

export default Product;
