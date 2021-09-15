import React from "react";
import "./home.css";
import Button from "../UI/Button";
const Home = () => {
  return (
    <div
      className="homeBackground"
      style={{ backgroundImage: 'url("./images/home-bg.jpg")' }}
    >
      <div className="homeContainer">
        <div>
          <div className="leftDiv">
            <h1>Food Made With Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium velit quisquam voluptatem nisi earum soluta natus
              alias reiciendis a tempora?
            </p>
          </div>
          <Button type="button" className="homeBtn">
            Order Now
          </Button>
        </div>
        <div className="rightDiv">
          <img src="./images/home-img.png" alt="homeImg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
