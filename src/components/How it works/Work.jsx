import React from "react";
import "./work.css";
import { WorkData } from "./WorkData";
const Work = () => {
  return (
    <div className="workDiv">
      <h1>
        How it <span>Works</span>
      </h1>
      <div className="row1">
        {WorkData.map((data) => {
          return (
            <div className="container" key={data.id}>
              <div className="imgDiv">
                <img src={data.img} alt="img" />
              </div>
              <h2 className="workDesc">{data.desc}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
