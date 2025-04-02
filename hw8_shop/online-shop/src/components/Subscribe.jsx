import React, { useState } from "react";
import expertImage from "../assets/img/expert.png";
import "./Subscribe.css";

function Subscribe() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError("");
    };

    const handleSubscribe = async () => {
        if (!email) {
            setError("Please enter a valid email.");
            return;
        }

        try {
            const response = await fetch("https://example.com/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error("Failed to subscribe. Please try again.");
            }

            console.log(`Email: ${email} subscribed successfully.`);
            setIsSubscribed(true);
            setEmail("");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="frame7 center">
            <div className="subscribe__info">
                <img src={expertImage} alt="Expert" />
                <div className="subscribe__text">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
                </div>
            </div>
            <div className="subscribe">
                <div className="subscribe__text_right">
                    <h1>SUBSCRIBE</h1>
                    FOR OUR NEWSLETTER AND PROMOTION
                </div>
                <div className="subscribe__button_right">
                    <input
                        type="email"
                        id="user-email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter Your Email"
                    />
                    <button className="subscribe__button_left" onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
                <div className="messages">
                    {error && <p className="error-message">{error}</p>}
                    {isSubscribed && <p className="success-message">You have successfully subscribed!</p>}
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
