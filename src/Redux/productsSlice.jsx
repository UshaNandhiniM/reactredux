import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://tse1.mm.bing.net/th?id=OIP.oAIxA0fr7zzrxI_y2YP_eAHaHa&pid=Api&P=0&h=180",
      images: ["https://tse1.mm.bing.net/th?id=OIP.oAIxA0fr7zzrxI_y2YP_eAHaHa&pid=Api&P=0&h=180"],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: ["https://tse2.mm.bing.net/th?id=OIP.ABgVCRo3GdBEfu2YQuzr-AHaHa&pid=Api&P=0&h=180"],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://tse2.mm.bing.net/th?id=OIP.vGjy8U2okifa24Cxy7rWVAHaIy&pid=Api&P=0&h=180"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: ["https://tse1.mm.bing.net/th?id=OIP.hGm7B7ka6aFju8SR1fpUswHaKC&pid=Api&P=0&h=180"],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: ["https://tse3.mm.bing.net/th?id=OIP.hY3DSRHKTwW44F3nvihkdAHaHa&pid=Api&P=0&h=180"],
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.quantity = (product.quantity || 1) + 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

export const { incrementQuantity, decrementQuantity, removeProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
