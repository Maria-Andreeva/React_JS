import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleState} from "../store/themeSlice";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    // При каждом изменении темы обновляем `body.className`
    useEffect(() => {
        document.body.className = theme === "dark" ? "theme-dark" : "theme-light";
    }, [theme]);

    return (
        <div className="toggle-wrapper">
            <label className="switch">
                <input type="checkbox" checked={theme === "dark"} onChange={() => dispatch(toggleState())} />
                <span className="slider"></span>
            </label>
            <p>{theme === "dark" ? "Тёмная тема" : "Светлая тема"}</p>
        </div>
    );
};
