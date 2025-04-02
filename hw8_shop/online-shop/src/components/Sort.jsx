import React, { useState } from "react";
import "./Sort.css"; // Убедитесь, что стили подключены

const Sort = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState([]);

    // Функция для открытия/закрытия dropdown
    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    // Функция для обработки выбора размера
    const handleSizeChange = (size) => {
        setSelectedSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size]
        );
    };

    return (
        <div className="sort">
            <div className="sort__details">
                <div className="sort__summary" onClick={() => toggleDropdown("color")}>
                    <span className="sort__heading">CHOOSE COLOR</span>
                    <svg
                        width="10.02"
                        height="5.00"
                        viewBox="0 0 10.02 5.00391"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                            fill="#6F6E6E"
                        />
                    </svg>
                </div>
            </div>

            <div className="sort__details">
                <div className="sort__summary" onClick={() => toggleDropdown("size")}>
                    <span className="sort__heading">CHOOSE SIZE</span>
                    <svg
                        width="10.02"
                        height="5.00"
                        viewBox="0 0 10.02 5.00391"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                            fill="#6F6E6E"
                        />
                    </svg>
                </div>
                {openDropdown === "size" && (
                    <div className="sort__box">
                        {["XS", "S", "M", "L"].map((size) => (
                            <div className="sort__check" key={size}>
                                <input
                                    id={`sort__check_${size}`}
                                    type="checkbox"
                                    checked={selectedSizes.includes(size)}
                                    onChange={() => handleSizeChange(size)}
                                />
                                <label htmlFor={`sort__check_${size}`}>{size}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="sort__details">
                <div className="sort__summary" onClick={() => toggleDropdown("quantity")}>
                    <span className="sort__heading">QUANTITY</span>
                    <svg
                        width="10.02"
                        height="5.00"
                        viewBox="0 0 10.02 5.00391"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                            fill="#6F6E6E"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Sort;
