import React from "react";
import '../DuckCard/DuckCard.css'
export default function DuckCard(props) {
  const {duck} = props
  return (
    <div className="duck-card">
      <div className="duck-card__image">
        <img src={duck.img} alt='ducks' className="duck-card__png" />
      </div>
      <div className="duck-card__desc">
        <p className="duck-card__name">
          {duck.name}
        </p>
        <p className="duck-card__text">
          {duck.description}
        </p>
      </div>
    </div>
  );
}
