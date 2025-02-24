import { Button } from "react-bootstrap";
import style from "./style.module.css";
const { product, productImg } = style;
const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9m7a-6zABrhWpSzeYUJE4b-E9Sb22f9E21w&s"
          alt="s"
        />
      </div>
      <h2>title</h2>
      <h3>10 Egp</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
