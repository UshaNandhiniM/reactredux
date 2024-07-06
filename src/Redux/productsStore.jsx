import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const ProductStore = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default ProductStore;