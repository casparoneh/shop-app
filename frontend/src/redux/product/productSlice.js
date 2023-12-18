import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadgetProducts: (state, action) => {
      state.product = action.payload;
    },
    deleteProductAndRefresh: (state, action) => {
      state.product = state.product.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const { loadgetProducts, deleteProductAndRefresh } =
  productSlice.actions;

export default productSlice.reducer;
