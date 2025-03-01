import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { TProduct } from "@customTypes/Product";
import { useAppDispatch } from "@store/hooks";
import { addToCard } from "@store/cart/cartSlice";
const { product, productImg } = style;
const Product = ({ id, price, title, img }: TProduct) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    dispatch(addToCard(id));
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} $</h3>
      <Button
        variant="info"
        onClick={addToCartHandler}
        style={{ color: "white" }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
