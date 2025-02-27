import React from "react";
import './App.css';
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
        <Message text="Какой-то текст, переданный через пропс" type="default" />
        <Message text="Этот текст - Предупреждение!" type="warning" />
        <Message text="У Вас Ошибка!" type="error" />
        <Message text="Ура! Успех!" type="success" />
    </div>
  );
}

export default App;
