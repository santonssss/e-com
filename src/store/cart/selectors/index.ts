import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const getTotalCartQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return totalQuantity;
  }
);
export { getTotalCartQuantitySelector };
