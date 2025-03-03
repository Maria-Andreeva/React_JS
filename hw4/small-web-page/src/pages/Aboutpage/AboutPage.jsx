import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage () {
    return (
        <div>
            <h1>О нас</h1>
            <p>Это мы - молодцы!</p>
            <Link className="nav-link" to="/">Вернуться на главную страницу</Link>
        </div>
    );
}

export default AboutPage;