import { useAppSelector } from "@store/hooks";
import style from "./style.module.css";
import Logo from "@assets/svg/cart.svg?react";
import { getTotalCartQuantitySelector } from "@store/cart/selectors";
import { useEffect, useState } from "react";
const { basketContainer, basketQuantity, pumpCartQuantity } = style;
const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getTotalCartQuantitySelector);
  const [isAnimate, setAnimate] = useState(false);
  const checkToAnimate = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;
  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setAnimate(true);
    const debounce = setTimeout(() => {
      setAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  return (
    <div className={basketContainer}>
      <Logo />
      <div className={checkToAnimate}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
