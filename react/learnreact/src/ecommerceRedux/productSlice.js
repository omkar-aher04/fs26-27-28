import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const allProducts = createAsyncThunk("allProducts", async () => {
  const response = await axios.get("https://fakestoreapi.in/api/products");
  return response.data.products;
});

const productSl = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allProducts.pending, () => {})
      .addCase(allProducts.fulfilled, () => {})
      .addCase(allProducts.rejected, () => {});
  },
});

export const productReducer = productSl.reducer;
