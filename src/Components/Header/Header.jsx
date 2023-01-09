import React from 'react'
import '../Header/Header.css'
import Logo from '../Logo/Logo'
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo/>
      </div>
      <ul className="header__nav">
        <li className="header__link">Ducks</li>
        <li className="header__link">My profile</li>
        <li className="header__link">Logout</li>
      </ul>
    </div>
  )
}
