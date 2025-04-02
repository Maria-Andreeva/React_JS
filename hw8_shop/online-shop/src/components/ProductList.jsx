import React, { useState } from "react";
import products from "../data/products";
import "./ProductList.css";
import basketCart from "../assets/img/basketCart.svg"


function ProductList({ productIds = [] }) {

    const filteredAndSortedProducts = products
        .filter(product => productIds.includes(product.id))
        .sort((a, b) => a.id - b.id);

    return (
        <div className="content__items">
            {filteredAndSortedProducts.map((product) => (
                <div className="content__item" key={product.id}>
                    <div className="content__item_full">
                    <img className="content__img" src={product.image} alt={product.name} />
                    <div className="content__item_fon">
                        <div className="button__fon">
                            <img src={basketCart} alt="add to card" /> Add to Cart
                        </div>
                    </div>
                        <a href="/product"><h4 className="content__item_heading">{product.name}</h4></a>
                        <a href="/product"><p className="content__item_text">{product.description}</p></a>
                        <a href="/product"><p className="content__item_price">{product.price}</p></a>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;


