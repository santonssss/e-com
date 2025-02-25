import { TProduct } from "@customTypes/Product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export type TResponse = TProduct[];
const actGetProductsByPrefix = createAsyncThunk(
  "products/actGetProductsByPrefix",
  async (prefix: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TResponse[]>(
        `http://localhost:5000/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
export default actGetProductsByPrefix;
