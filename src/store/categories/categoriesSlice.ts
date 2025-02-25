import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import actGetCategories, { TResponse } from "./act/actGetCategories";
import { TCategory } from "@customTypes/Category";
import { TLoading } from "@customTypes/shared";
interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}
const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetCategories.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(actGetCategories.fulfilled, (state, action) => {
        state.loading = "successed";
        state.records = action.payload as any;
      })
      .addCase(actGetCategories.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});
export { actGetCategories };
export default categoriesSlice.reducer;
