import { Link } from "react-router-dom";
import pinterestIcon from "../assets/img/pinterest.svg";
import twitterIcon from "../assets/img/twitter.svg";
import '../pages/Home/Home.css';

function Footer() {
    return (
        <section className="copyright center">
            <div className="copyright__left">© 2023 Brand All Rights Reserved.</div>
            <nav className="copyright__right">
                <div className="social__icon">
                    <a href="https://ru.pinterest.com/">
                        <img src={pinterestIcon} alt="pinterest" />
                    </a>
                </div>

                <div className="social__icon">
                    <a href="https://x.com/">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </div>
            </nav>
        </section>
    );
}

export default Footer;