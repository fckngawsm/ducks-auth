import React from "react";
import "../DuckList/DuckList.css";
import data from "../../utils/data";
import DuckCard from "../DuckCard/DuckCard";
export default function DuckList() {
  const { ducks } = data;
  return (
    <div className="duck-list">
      {ducks.map((duck) => {
        return <DuckCard duck={duck} key={duck.id} />;
      })}
    </div>
  );
}
