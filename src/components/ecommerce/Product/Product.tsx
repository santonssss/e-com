import { memo, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

import style from "./style.module.css";
import { TProduct } from "@customTypes/Product";

import { useAppDispatch } from "@store/hooks";
import { addToCard } from "@store/cart/cartSlice";

const { product, productImg } = style;

const Product = memo(({ id, price, title, img, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setBtnDisabled] = useState<boolean>(false);

  const currentRemaingQuantity = max - (quantity ?? 0);
  const quantityReached = currentRemaingQuantity <= 0;
  const isReach = quantityReached
    ? "You reach to limit"
    : `You can add ${currentRemaingQuantity} item`;

  useEffect(() => {
    if (!isBtnDisabled) return;

    setBtnDisabled(true);
    const debounce = setTimeout(() => setBtnDisabled(false), 300);
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCard(id));
    setBtnDisabled((prev) => !prev);
  };

  const renderToCart = isBtnDisabled ? (
    <>
      <Spinner animation="border" size="sm" /> Loading...
    </>
  ) : (
    "Add to cart"
  );

  return (
    <div
      className={`${product} text-center border rounded-4 p-3 shadow w-100 w-md-auto`}
    >
      <div className={`${productImg} mb-3`}>
        <img src={img} alt={title} className="img-fluid rounded-3 w-100" />
      </div>
      <h2 className="h5 fw-bold">{title}</h2>
      <h3 className="h6 text-primary mb-2">{price} $</h3>
      <p
        className={`${
          quantityReached ? "text-danger" : "text-success"
        } mb-3 fw-semibold`}
      >
        {isReach}
      </p>
      <Button
        variant="info"
        onClick={addToCartHandler}
        className="w-100 text-white fw-bold"
        disabled={isBtnDisabled || quantityReached}
      >
        {renderToCart}
      </Button>
    </div>
  );
});

export default Product;
