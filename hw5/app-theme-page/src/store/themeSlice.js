import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme") || "light"; // Читаем тему из localStorage

const themeSlice = createSlice({
    name: "theme",
    initialState: { theme: savedTheme },
    reducers: {
        toggleState: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.theme); // Сохраняем тему
        },
    },
});

export const { toggleState} = themeSlice.actions;
export default themeSlice.reducer;
