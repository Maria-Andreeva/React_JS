import { Link } from "react-router-dom";
import './Header.css';
import logo from '../assets/img/logo.png';
import searchIcon from '../assets/img/search.svg';
import menuIcon from '../assets/img/menu.svg';
import userIcon from '../assets/img/lk.svg';
import basketIcon from '../assets/img/basket.svg';

function Header() {
    return (
        <header className="header center container">
            <div className="header__left">
                <Link to="/" className="header__logo">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/catalog" className="header__search">
                    <img src={searchIcon} alt="search" />
                </Link>
            </div>
            <div className="header__right">
                <label htmlFor="check">
                    <img src={menuIcon} alt="burger-menu" />
                </label>
                <input id="check" type="checkbox" />
                <nav className="mobile-menu">
                    <div className="mobile-menu__link-site"></div>
                    <h3 className="mobile-menu__heading">MENU</h3>
                    <div className="mobile-menu__box">
                        <div className="mobile-menu__item">
                            <Link to="#" className="mobile-menu__title">
                                MAN
                            </Link>
                            <ul className="mobile-menu__list">
                                <li><Link className="mobile-menu__link" to="#">Accessories</Link></li>
                                <li><Link className="mobile-menu__link" to="#">Bags</Link></li>
                                <li><Link className="mobile-menu__link" to="#">Denim</Link></li>
                                <li><Link className="mobile-menu__link" to="#">T-Shirts</Link></li>
                            </ul>
                        </div>
                        <div className="mobile-menu__item">
                            <Link to="#" className="mobile-menu__title">
                                WOMAN
                            </Link>
                            <ul className="mobile-menu__list">
                                <li><Link className="mobile-menu__link" to="#">Accessories</Link></li>
                                <li><Link className="mobile-menu__link" to="#">Bags</Link></li>
                                <li><Link className="mobile-menu__link" to="#">Denim</Link></li>
                                <li><Link className="mobile-menu__link" to="#">T-Shirts</Link></li>
                            </ul>
                        </div>
                        <div className="mobile-menu__item">
                            <Link to="#" className="mobile-menu__title">
                                KIDS
                            </Link>
                            <ul className="mobile-menu__list">
                                <li><Link className="mobile-menu__link" to="#">Accessories</Link></li>
                                <li><Link className="mobile-menu__link" to="#">Bags</Link></li>
                                <li><Link className="mobile-menu__link" to="#">Denim</Link></li>
                                <li><Link className="mobile-menu__link" to="#">T-Shirts</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Link to="/registration">
                    <img className="header__img_lk" src={userIcon} alt="person account" />
                </Link>
                <Link to="/cart">
                    <div className="header__right_five">5</div>
                    <img className="header__img_basket" src={basketIcon} alt="basket" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
