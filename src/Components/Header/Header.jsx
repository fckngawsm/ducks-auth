import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
export default function Header({ onLogout }) {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <ul className="header__nav">
        <li>
          <Link to="/" className="header__link">
            Утки
          </Link>
        </li>
        <li>
          <Link to="/my-profile" className="header__link">
            Мой профиль
          </Link>
        </li>
        <li onClick={onLogout}>
          <Link to="/sign-up" className="header__link">
            Выход
          </Link>
        </li>
      </ul>
    </div>
  );
}
