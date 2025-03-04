import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css"; // Основные стили

const App = () => {
    return (
        <Provider store={store}>
            <ThemeToggle />
        </Provider>
    );
};

export default App;
