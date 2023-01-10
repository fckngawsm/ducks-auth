import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../Register/Register.css";
export default function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password);
  };
  return (
    <div className="register">
      <Logo />
      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="register__link">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/sign-in" className="register__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
}
