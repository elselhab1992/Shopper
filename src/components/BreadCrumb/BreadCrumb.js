import { Link } from "react-router-dom";
import "./BreadCrumb.css";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = ({ product }) => {
  return (
    <section className="breadcrumb">
      <div className="breadcrumb-content">
        <Link to="/">Shop</Link>
        <FaChevronRight />
        {product.category}
        <FaChevronRight />
        {product.name}
      </div>
    </section>
  );
};

export default BreadCrumb;
