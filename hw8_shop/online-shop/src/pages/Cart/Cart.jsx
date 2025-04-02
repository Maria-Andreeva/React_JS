import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Cart.css";
import content3 from "../../assets/img/content3.jpg";
import content7 from "../../assets/img/content7.jpg";
import Subscribe from "../../components/Subscribe";
import Breadcrumb from "../../components/Breadcrumb";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "MANGO PEOPLE T-SHIRT", price: 300, color: "Red", size: "XL", image: content3, quantity: 2 },
        { id: 2, name: "MANGO PEOPLE T-SHIRT", price: 300, color: "Red", size: "XL", image: content7, quantity: 2 },
    ]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const [totalPrice, setTotalPrice] = useState(calculateTotal());

    const handleQuantityChange = (id, value) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: value } : item
        );
        setCartItems(updatedCart);
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        setTotalPrice(calculateTotal());
    }, [cartItems]);

    // Состояния для формы адреса
    const [address, setAddress] = useState({
        country: "",
        state: "",
        zip: "",
    });

    const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleGetQuote = (e) => {
        e.preventDefault();
        alert(`Shipping quote requested for: 
        Country: ${address.country}, 
        State: ${address.state}, 
        Zip: ${address.zip}`);
    };

    return (
        <div>
            <div className="cart-container">
                <Header />
                <Breadcrumb />

                <div className="cart cart-container center">
                    <div className="cart__content">
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty!</p>
                        ) : (
                            cartItems.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} alt={item.name} className="cart-item__photo" />
                                    <div className="cart-item__content">
                                        <a href="#" className="cart-item__link">{item.name}</a>
                                        <div className="cart-item__info">
                                            <p className="cart-item__text">Price: <span className="cart-item__text_select">${item.price}</span></p>
                                            <p className="cart-item__text">Color: {item.color}</p>
                                            <p className="cart-item__text">Size: {item.size}</p>
                                            <p className="cart-item__text cart-item__text_quantity">
                                                Quantity: <input  className="cart-item__number" type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} min="1" />
                                            </p>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.id)} className="cart-item__close">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z" fill="#575757"/>
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            ))
                        )}
                        <div className="cart__buttons">
                            <button className="cart__buttons_btn" onClick={handleClearCart}>CLEAR SHOPPING CART</button>
                            <a href="/catalog"><button className="cart__buttons_btn">CONTINUE SHOPPING</button></a>
                        </div>
                    </div>

                    {/* Блок с адресом доставки */}
                    <div className="cart__info center cart-container">
                        <div className="cart__address">
                            <h2 className="cart__heading">SHIPPING ADDRESS</h2>
                            <form className="cart__form" onSubmit={handleGetQuote}>
                                <input type="text" name="country" placeholder="Country" value={address.country} onChange={handleAddressChange} className="cart__input" required />
                                <input type="text" name="state" placeholder="State" value={address.state} onChange={handleAddressChange} className="cart__input" required />
                                <input type="text" name="zip" placeholder="Postcode / Zip" value={address.zip} onChange={handleAddressChange} className="cart__input" required />
                                <button type="submit" className="cart__button">GET A QUOTE</button>
                            </form>
                        </div>

                        <div className="cart__total">
                            <div className="cart__total_info">
                                <p className="cart__subtotal">SUB TOTAL: ${totalPrice}</p>
                                <p className="cart__grandtotal">GRAND TOTAL: <span className="cart__grandtotal_price">${totalPrice}</span></p>
                            </div>
                            <button className="cart__total_btn">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>

                <Subscribe />
                <Footer />
            </div>
        </div>
    );
};

export default Cart;
