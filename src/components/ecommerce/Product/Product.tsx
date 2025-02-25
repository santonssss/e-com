import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { TProduct } from "@customTypes/Product";
const { product, productImg } = style;
const Product = ({ price, title, img }: TProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} $</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
