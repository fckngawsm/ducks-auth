import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "../Login/Login.css";
export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }
  return (
    <div className="login">
      <Logo />
      <p className="login__welcome">
        Это приложение содержит конфиденциальную информацию. Пожалуйста, войдите
        или зарегистрируйтесь, чтобы получить доступ к CryptoDucks.
      </p>
      <form className="login__form" onSubmit={handleSubmit}>
        <label for="username">Email:</label>
        <input
          id="username"
          required
          name="username"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Пароль:</label>
        <input
          id="password"
          required
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
