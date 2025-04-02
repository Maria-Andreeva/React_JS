import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Product.css';
import productImage from '../../assets/img/product-images.jpeg';
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductList from "../../components/ProductList";
import Subscribe from "../../components/Subscribe";
import Sort from "../../components/Sort";

const Product = () => {
    const mobileIds = [4, 6];
    const tabletIds = [4, 3];
    const desktopIds = [4, 3, 6];

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
        <div className="product-container">
            <Header />

            <div className="box-content">
                <Breadcrumbs />
                <div className="product center product-container">
                    <div className="product__image-wrapper">
                        <button className="arrow arrow-left">
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="clip69_441">
                                        <rect width="30" height="30" transform="translate(8.5 8.5)" fill="white" />
                                    </clipPath>
                                </defs>
                                <path d="M0 0H47V47H0V0Z" fill="#2A2A2A" fillOpacity="0.15" />
                                <rect width="30" height="30" transform="translate(8.5 8.5)" fill="white" fillOpacity="0" />
                                <g clipPath="url(#clip69_441)">
                                    <path d="M29.69 15.75L21.94 23.5L29.69 31.25L28.14 34.34L17.29 23.5L28.14 12.64L29.69 15.75Z" fill="black" />
                                </g>
                            </svg>

                        </button>

                        <div className="product__image">
                            <a href="#"><img src={productImage} alt="product"/></a>
                        </div>

                        <button className="arrow arrow-right">
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L47 0L47 47L0 47L0 0Z" fill="#2A2A2A" fillOpacity="0.15"/>
                                <g>
                                    <path
                                        d="M17.29 31.25L25.04 23.5L17.29 15.75L18.84 12.64L29.69 23.5L18.84 34.34L17.29 31.25Z"
                                        fill="#F16D7F"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="product__info center">
                        <div className="product__description center">
                            <h1 className="product__description_title">WOMEN COLLECTION</h1>
                            <div className="product__description_rectangle28">
                                <svg width="63" height="3.025391" viewBox="0 0 63 3.02539" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <defs/>
                                    <path
                                        id="Rectangle 28"
                                        d="M0 0L63 0L63 3.02L0 3.02L0 0Z"
                                        fill="#EF5B70"
                                        fillOpacity="1.000000"
                                        fillRule="evenodd"
                                    />
                                </svg>

                            </div>
                            <p className="product__description_subtitle">MOSCHINO CHEAP AND CHIC</p>
                            <p className="product__description_text center">
                                Compellingly actualize fully researched processes before proactive outsourcing.
                                Progressively syndicate collaborative architectures before cutting-edge services.
                                Completely visualize parallel core competencies rather than exceptional portals.
                            </p>
                            <p className="product__description_price">$561</p>
                            <svg
                                className="product__description_vector-one"
                                width="642.000000"
                                height="1.008545"
                                viewBox="0 0 642 1.00854"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    id="Vector"
                                    d="M0 0L642 0L642 1L0 1L0 0Z"
                                    fill="#EF5B70"
                                    fillOpacity="1.000000"
                                    fillRule="evenodd"
                                />
                            </svg>

                            <svg
                                className="product__description_vector-two"
                                width="175.000000"
                                height="0.274902"
                                viewBox="0 0 175 0.274902"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    id="Vector"
                                    d="M0 0L175 0L175 0.27L0 0.27L0 0Z"
                                    fill="#EF5B70"
                                    fillOpacity="1.000000"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>

                        <Sort />

                        <div className="product__btn">
                            <button className="product__btn_item">
                                <svg width="26.012207" height="24.203125" viewBox="0 0 26.0122 24.2031" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.49 21.96C5.5 21.53 5.64 21.1 5.88 20.75C6.12 20.39 6.47 20.12 6.87 19.96C7.27 19.8 7.7 19.76 8.12 19.85C8.54 19.94 8.93 20.15 9.23 20.46C9.53 20.77 9.73 21.16 9.81 21.58C9.89 22.01 9.85 22.45 9.68 22.85C9.52 23.25 9.24 23.59 8.88 23.83C8.52 24.07 8.1 24.2 7.67 24.2C7.38 24.19 7.1 24.13 6.83 24.02C6.57 23.91 6.33 23.74 6.12 23.53C5.92 23.33 5.76 23.08 5.65 22.81C5.55 22.54 5.49 22.25 5.49 21.96ZM21.3 24.2C20.87 24.2 20.44 24.08 20.07 23.85C19.71 23.61 19.42 23.28 19.24 22.88C19.06 22.48 19.01 22.04 19.08 21.6C19.14 21.17 19.34 20.77 19.63 20.45C19.92 20.13 20.3 19.9 20.72 19.79C21.14 19.68 21.59 19.7 21.99 19.85C22.4 19.99 22.76 20.25 23.03 20.6C23.29 20.94 23.45 21.36 23.48 21.8C23.52 22.39 23.33 22.97 22.95 23.43C22.77 23.65 22.54 23.83 22.28 23.96C22.03 24.1 21.75 24.18 21.46 24.2L21.3 24.2ZM8.59 17.26C8.38 17.26 8.17 17.19 8 17.06C7.83 16.93 7.71 16.74 7.66 16.54L3.73 1.97L0.97 1.97C0.71 1.97 0.47 1.86 0.28 1.68C0.1 1.49 0 1.24 0 0.98C0 0.72 0.1 0.47 0.28 0.28C0.47 0.1 0.71 0 0.97 0L4.45 0C4.66 0 4.87 0.07 5.04 0.2C5.21 0.33 5.33 0.51 5.38 0.72L9.31 15.29L20.01 15.29L23.57 6.9L11.71 6.9C11.45 6.9 11.21 6.8 11.02 6.61C10.84 6.43 10.74 6.17 10.74 5.91C10.74 5.65 10.84 5.4 11.02 5.22C11.21 5.03 11.45 4.93 11.71 4.93L25.05 4.93C25.21 4.93 25.37 4.97 25.5 5.05C25.64 5.12 25.76 5.24 25.85 5.37C25.94 5.51 25.99 5.67 26 5.83C26.02 5.99 25.99 6.16 25.93 6.31L21.54 16.67C21.46 16.84 21.34 16.99 21.18 17.1C21.03 17.2 20.84 17.26 20.66 17.26L8.59 17.26Z"
                                        fill="#EF5B70"
                                        fillOpacity="1.000000"
                                        fillRule="nonzero"
                                    />
                                </svg>

                                Add to Card
                            </button>
                        </div>
                    </div>


                </div>


                <div className="home-page-container">
                    <ProductList productIds={homePageProductIds}/>
                </div>
                <Subscribe/>
                <Footer/>
            </div>
        </div>
    );
};

export default Product;