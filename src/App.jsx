import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import SpecialDishes from "./components/Special Dishes/SpecialDishes";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./components/context/ContextProvider";
import "./index.css";
import Work from "./components/How it works/Work";
import CarouselCard from "./components/carousel/CarouselCard";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return ()=>{
      clearTimeout()
    }
  }, []);
  const clickEvent = () => {
    setShowCart(true);
  };
  const exitEvent = () => {
    setShowCart(false);
  };
  return (
    <>
      {loading ? (
        <img src="./images/loader.gif" alt="loader" className="loader" />
      ) : (
        <>
          <ContextProvider>
            <Header onClickHandler={clickEvent} />
            {showCart && <Cart show={showCart} removeCart={exitEvent} />}
            <Home />
            <SpecialDishes />
            <Meals />
          </ContextProvider>
          <CarouselCard />
          <Work />
        </>
      )}
    </>
  );
};

export default App;
