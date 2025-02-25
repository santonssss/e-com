import { TCategory } from "@customTypes/Category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export type TResponse = TCategory[];
const actGetCategories = createAsyncThunk(
  "categoriest/actGetCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<TResponse[]>(
        "http://localhost:5000/categories"
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
export default actGetCategories;
