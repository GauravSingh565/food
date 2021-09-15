import React from "react";
import "./dishes.css";
import { Data } from "./Data";
import Card from "../UI/Card";
const SpecialDishes = () => {
  return (
    <div className="dishesDiv">
      <h1>
        Our <span>Special</span> Dishes
      </h1>

      <div className="dishContainer">
        {Data.map((data) => {
          return (
            <Card className="card" key={data.id}>
              <img src={data.img} alt="img" />
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialDishes;
