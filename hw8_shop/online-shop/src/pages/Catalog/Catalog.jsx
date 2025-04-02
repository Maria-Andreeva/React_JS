import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import Feauture from '../../components/Feature';
import './Catalog.css';
import Subscribe from '../../components/Subscribe';
import ProductList from "../../components/ProductList";
import SortComponent from "../../components/SortComponent";


const Catalog = () => {

    const mobileIds = [1, 7, 4, 8, 9, 10, 11, 12];
    const tabletIds = [1, 7, 4, 8, 9, 10, 11, 12];
    const desktopIds = [1, 7, 3, 4, 8, 9, 10, 11, 12];

    const [filteredProductIds, setFilteredProductIds] = useState(null);

    const [homePageProductIds, setHomePageProductIds] = useState(desktopIds);
    useEffect(() => {
        const updateProductIds = () => {
            if (window.innerWidth < 768) {
                setHomePageProductIds(mobileIds);
            } else if (window.innerWidth <= 1024) {
                setHomePageProductIds(tabletIds);
            } else {
                setHomePageProductIds(desktopIds);
            }
        };

        updateProductIds();
        window.addEventListener("resize", updateProductIds);
        return () => window.removeEventListener("resize", updateProductIds);
    }, []);


    return (
        <div>

            <div className="catalog-container">
                <Header/>
                <Breadcrumbs/>

                <div className="filter-sort center">
                    <details className="filter">
                        <summary className="filter__summary">
                            <span className="filter__heading">FILTER</span>
                            <svg width="15.000000" height="10.000000" viewBox="0 0 15 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z"
                                    fill="#000000"/>
                            </svg>
                        </summary>
                        <div className="filter__content">

                            <details open className="filter__item">
                                <summary className="filter__head">CATEGORY</summary>
                                <div className="filter__link-box">
                                    <a href="#" className="filter__link">Accessories</a>
                                    <a href="#" className="filter__link">Bags</a>
                                    <a href="#" className="filter__link">Denim</a>
                                    <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                                    <a href="#" className="filter__link">Jackets & Coats</a>
                                    <a href="#" className="filter__link">Polos</a>
                                    <a href="#" className="filter__link">Shirts</a>
                                    <a href="#" className="filter__link">Shoes</a>
                                    <a href="#" className="filter__link">Sweaters & Knits</a>
                                    <a href="#" className="filter__link">T-Shirts</a>
                                    <a href="#" className="filter__link">Tanks</a>
                                </div>
                            </details>

                            <details className="filter__item">
                                <summary className="filter__head">BRAND</summary>
                                <div className="filter__link-box">
                                    <a href="#" className="filter__link">ELLERY X M'O CAPSULE</a>
                                    <a href="#" className="filter__link">ELLERY X M'O CAPSULE</a>
                                    <a href="#" className="filter__link">ELLERY X M'O CAPSULE</a>
                                    <a href="#" className="filter__link">ELLERY X M'O CAPSULE & Sweatshirts</a>
                                    <a href="#" className="filter__link">ELLERY X M'O CAPSULE & Coats</a>
                                </div>
                            </details>

                            <details className="filter__item">
                                <summary className="filter__head">DESIGNER</summary>
                                <div className="filter__link-box">
                                    <a href="#" className="filter__link">ELLERY X M'O </a>
                                    <a href="#" className="filter__link">ELLERY X M'O </a>
                                    <a href="#" className="filter__link">ELLERY X M'O </a>
                                    <a href="#" className="filter__link">ELLERY X M'O </a>
                                    <a href="#" className="filter__link">ELLERY X M'O </a>
                                </div>
                            </details>
                        </div>
                    </details>
                    <SortComponent
                        productIds={homePageProductIds}
                        setFilteredProductIds={setFilteredProductIds}
                    />
                </div>
                <ProductList productIds={filteredProductIds ?? homePageProductIds} />

                <div className="pagination center">
                    <a href="#" className="prev">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="black"/>
                        </svg>
                    </a>

                    <a href="#" className="page active">1</a>
                    <a href="#" className="page">2</a>
                    <a href="#" className="page">3</a>
                    <a href="#" className="page">4</a>
                    <a href="#" className="page">5</a>
                    <a href="#" className="page">6</a>
                    <span className="dots">.....</span>
                    <a href="#" className="page">20</a>

                    <a href="#" className="next">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2L5 7L0 12L1 14L8 7L1 0L0 2Z" fill="black"/>
                        </svg>
                    </a>
                </div>

                <Feauture/>
                <Subscribe/>
                <Footer/>
            </div>
        </div>
    );
};

export default Catalog;
