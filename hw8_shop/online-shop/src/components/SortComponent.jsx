import React, { useState, useEffect } from 'react';
import './SortComponent.css';
import products from "../data/products";

const SortComponent = ({ productIds, setFilteredProductIds }) => {
    const [selectedSize, setSelectedSize] = useState([]);  // Состояние для выбранных размеров
    const [openSections, setOpenSections] = useState({
        trendingNow: false,
        size: false,
        price: false,
    });

    const handleSizeFilter = (size) => {
        setSelectedSize(prevSizes => {
            const newSizes = prevSizes.includes(size)
                ? prevSizes.filter(s => s !== size)  // Убираем размер, если он уже выбран
                : [...prevSizes, size];  // Добавляем размер
            return newSizes;
        });
    };

    // Используем useEffect для фильтрации товаров, когда изменяется selectedSize
    useEffect(() => {
        const filtered = products
            .filter(product => productIds.includes(product.id))
            .filter(product => selectedSize.length === 0 || selectedSize.includes(product.size));

        setFilteredProductIds(filtered.map(product => product.id));
    }, [selectedSize, productIds, setFilteredProductIds]); // Фильтрация будет выполнена при изменении selectedSize

    const handleToggle = (section) => {
        setOpenSections(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className="sort-catalog sort-container">
            <details
                className="sort__details"
                open={openSections.trendingNow}
                onClick={(e) => e.stopPropagation() && handleToggle('trendingNow')} // Prevent opening by size selection
            >
                <summary className="sort__summary">
                    <span className="sort__heading">TRENDING NOW</span>
                    <svg
                        width="10.020004"
                        height="5.003906"
                        viewBox="0 0 10.02 5.00391"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs />
                        <path
                            d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                            fill="#6F6E6E"
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </svg>
                </summary>
            </details>

            <details
                className="sort__details"
                open={openSections.size}
                onClick={(e) => e.stopPropagation() && handleToggle('size')} // Prevent toggling on size click
            >
                <summary className="sort__summary">
                    <span className="sort__heading">SIZE</span>
                    <svg
                        width="10.020004"
                        height="5.003906"
                        viewBox="0 0 10.02 5.00391"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs />
                        <path
                            d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                            fill="#6F6E6E"
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </svg>
                </summary>
                <div className="sort__box">
                    {['XS', 'S', 'M', 'L'].map(size => (
                        <div className="sort__check" key={size}>
                            <input
                                id={`sort__check_${size}`}
                                type="checkbox"
                                checked={selectedSize.includes(size)}
                                onChange={() => handleSizeFilter(size)}
                            />
                            <label htmlFor={`sort__check_${size}`}>{size}</label>
                        </div>
                    ))}
                </div>
            </details>

            <details
                className="sort__details"
                open={openSections.price}
                onClick={(e) => e.stopPropagation() && handleToggle('price')}
            >
                <summary className="sort__summary">
                    <span className="sort__heading">PRICE</span>
                    <svg
                        width="10.020004"
                        height="5.003906"
                        viewBox="0 0 10.02 5.00391"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs />
                        <path
                            d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                            fill="#6F6E6E"
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </svg>
                </summary>
            </details>
        </div>
    );
};

export default SortComponent;
