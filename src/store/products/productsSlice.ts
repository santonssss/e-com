import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByPrefix from "./act/actGetProductsByPrefix";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/Product";
interface IProductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetProductsByPrefix.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(actGetProductsByPrefix.fulfilled, (state, action) => {
        state.loading = "successed";
        state.records = action.payload as any;
      })
      .addCase(actGetProductsByPrefix.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});
export const { productsCleanUp } = productsSlice.actions;
export { actGetProductsByPrefix };
export default productsSlice.reducer;
