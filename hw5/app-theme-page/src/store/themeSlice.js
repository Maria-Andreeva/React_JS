import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme") || "light"; // Читаем тему из localStorage

const themeSlice = createSlice({
    name: "theme",
    initialState: { theme: savedTheme },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.theme); // Сохраняем тему
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
