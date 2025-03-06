import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "productList",
    initialState: {
        productsItems: [],
    },
    reducers: {
        // Редьюсер для добавления нового продукта
        addProduct: (state, action) => {
            state.productsItems.push(action.payload); // Добавляем новый продукт в массив
        },

        // Редьюсер для редактирования существующего продукта
        editProduct: (state, action) => {
            const index = state.productsItems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.productsItems[index] = action.payload; // Обновляем объект
            }
        },

        // Редьюсер для удаления продукта
        // action.payload должен содержать только id продукта
        deleteProduct: (state, action) => {
            state.productsItems = state.productsItems.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addProduct, editProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
