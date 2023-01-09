import React from "react";
import '../Logo/Logo.css';
import LogoDuck from "../Logo/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo__container">
        <img className="logo__image" src={LogoDuck} alt="CryptoDucks logo" />
      </div>
    </div>
  );
}
