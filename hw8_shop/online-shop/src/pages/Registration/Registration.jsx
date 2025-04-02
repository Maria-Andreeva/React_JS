import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Registration.css';
import Subscribe from '../../components/Subscribe';
import Breadcrumb from "../../components/Breadcrumb";

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: 'male',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (Object.keys(newErrors).length > 0) {
            alert(Object.values(newErrors).join('\n'));
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted', formData);
        }
    };


    return (
        <>
            <div className="container">
                <Header />
                <div className="box-content">
                    <Breadcrumb />
                    <div className="registration center">
                        <form onSubmit={handleSubmit} className="registration__form">
                            <div className="registration__left">
                                <h2 className="registration__left_heading-form">Your Name</h2>
                                <input
                                    className="registration__left_input"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                />
                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                                <input
                                    className="registration__left_input"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                                {errors.lastName && <p className="error">{errors.lastName}</p>}
                            </div>
                            <div className="registration__left_gender">
                                <label className="registration__left_btn">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleChange}
                                    />
                                    <span className="registration__left_radio-btn"></span>
                                    Male
                                </label>
                                <label className="registration__left_btn">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleChange}
                                    />
                                    <span className="registration__left_radio-btn"></span>
                                    Female
                                </label>
                                <label className="registration__left_btn tablet-only">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        checked={formData.gender === 'other'}
                                        onChange={handleChange}
                                    />
                                    <span className="registration__left_radio-btn"></span>
                                    Other
                                </label>
                            </div>
                            <div className="registration__left">
                                <h2 className="registration__left_heading-form">Login details</h2>
                                <input
                                    className="registration__left_input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                                <input
                                    className="registration__left_input"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                                <p className="registration__left_info">
                                    Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
                                </p>
                            </div>
                            <button type="submit" className="registration__btn">
                                <span className="registration__btn_text">JOIN NOW</span>
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.54 0.2C11.6 0.14 11.68 0.08 11.77 0.05C11.85 0.01 11.94 0 12.04 0C12.13 0 12.22 0.01 12.31 0.05C12.39 0.08 12.47 0.14 12.54 0.2L16.79 4.45C16.85 4.52 16.91 4.6 16.94 4.68C16.98 4.77 17 4.86 17 4.95C17 5.05 16.98 5.14 16.94 5.23C16.91 5.31 16.85 5.39 16.79 5.46L12.54 9.71C12.41 9.84 12.22 9.91 12.04 9.91C11.85 9.91 11.67 9.84 11.54 9.71C11.4 9.57 11.33 9.39 11.33 9.2C11.33 9.02 11.4 8.84 11.54 8.7L15.28 4.95L11.54 1.21C11.47 1.14 11.42 1.06 11.38 0.98C11.35 0.89 11.33 0.8 11.33 0.7C11.33 0.61 11.35 0.52 11.38 0.43C11.42 0.35 11.47 0.27 11.54 0.2Z" fill="#FFFFFF" />
                                    <path d="M0 4.95C0 4.77 0.07 4.59 0.2 4.45C0.34 4.32 0.52 4.25 0.7 4.25L15.58 4.25C15.77 4.25 15.95 4.32 16.08 4.45C16.21 4.59 16.29 4.77 16.29 4.95C16.29 5.14 16.21 5.32 16.08 5.46C15.95 5.59 15.77 5.66 15.58 5.66L0.7 5.66C0.52 5.66 0.34 5.59 0.2 5.46C0.07 5.32 0 5.14 0 4.95Z" fill="#FFFFFF" />
                                </svg>
                            </button>
                        </form>
                        <div className="registration__right">
                            <h2 className="registration__right_heading">LOYALTY HAS ITS PERKS</h2>
                            <p className="registration__right_info">Get in on the loyalty program where you can earn points and unlock serious perks.
                                Starting with these as soon as you join:</p>
                            <ul className="registration__right_ul">
                                <li className="registration__right_list">15% off welcome offer</li>
                                <li className="registration__right_list">Free shipping, returns and exchanges on all orders</li>
                                <li className="registration__right_list">$10 off a purchase on your birthday</li>
                                <li className="registration__right_list">Early access to products</li>
                                <li className="registration__right_list">Exclusive offers & rewards</li>
                            </ul>
                        </div>

                    </div>
                </div>

            <Subscribe />
            <Footer />
            </div>
        </>
    );
}

export default Registration;
