import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";

const store = configureStore({
  reducer: {
    ecommerce: productReducer,
  },
});
export default store;
