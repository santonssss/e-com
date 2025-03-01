import { TProduct } from "@customTypes/Product";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface ICartState {
  items: { [key: number]: number };
  cartSaveData: TProduct[];
}
const initialState: ICartState = {
  items: {},
  cartSaveData: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});
export const { addToCard } = cartSlice.actions;
export default cartSlice.reducer;
