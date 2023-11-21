import { Link } from "react-router-dom";
import "./BreadCrumb.css";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = ({ product }) => {
  return (
    <section className="breadcrumb">
      <div className="breadcrumb-content">
        <Link to="/">Shop</Link>
        <FaChevronRight />
        <p>{product.category}</p>
        <FaChevronRight />
        <p>{product.name}</p>
      </div>
    </section>
  );
};

export default BreadCrumb;
