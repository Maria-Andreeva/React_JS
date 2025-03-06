import { configureStore } from '@reduxjs/toolkit';
import productSlice from "./reducer/ProductSlice";

const store = configureStore({
    reducer: {
        productList: productSlice,
    },
});

export default store;
