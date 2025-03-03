import {Link} from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
      <div className="page">
          <h1>Главная страница</h1>
          <p>Добро пожаловать на главную страницу нашего React-приложения!</p>
          <Link className="nav-link" to="/about">Перейти на страницу "О нас"</Link>
      </div>

  )
}

export default HomePage;