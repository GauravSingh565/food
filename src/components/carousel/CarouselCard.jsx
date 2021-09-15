import React from "react";
import "./carousel.css";
import Carousel from "react-elastic-carousel";

const CarouselCard = () => {
  const breakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="carousel">
      <h1>Top Brands</h1>
      <div className="carouselDiv">
        <Carousel breakPoints={breakPoint}>
          <div className="brand">
            <img src="./images/KFC-Logo.wine.png" alt="kfclogo" />
          </div>
          <div className="brand">
            <img src="./images/bbq.png" alt="bbqlogo" />
          </div>
          <div className="brand">
            <img src="./images/macD.png" alt="bbqlogo" className="behroz" />
          </div>
          <div className="brand">
            <img src="./images/dominose.svg" alt="bbqlogo" className="behroz" />
          </div>
          <div className="brand">
            <img
              src="./images/behrouz-biryani.webp"
              alt="behrozlogo"
              className="behroz"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselCard;
