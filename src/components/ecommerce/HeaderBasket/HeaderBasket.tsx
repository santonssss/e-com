import style from "./style.module.css";
import Logo from "../../../assets/svg/cart.svg?react";
const { basketContainer, basketQuantity } = style;
const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo />
      <div className={basketQuantity}>1</div>
    </div>
  );
};

export default HeaderBasket;
