// import { MealsData } from "./MealsData";
import { useEffect, useState } from "react";
import "./meals.css";
import MealsItem from "./MealsItem";

const Meals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const res = await fetch(
        "https://meals-5da9b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!res.ok) {
        throw new Error("Something went worng");
      }
      const mealsData = await res.json();

      const loadedMeals = [];

      for (const key in mealsData) {
        loadedMeals.push({
          id: key,
          title: mealsData[key].title,
          desc: mealsData[key].desc,
          price: mealsData[key].price,
          img: mealsData[key].img,
        });
      }
      setMealsData(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((err) => {
      setIsError(err.message);
      setIsLoading(false);
    });
    return()=>{
      setMealsData([])
    }
  }, []);
  if (isLoading) {
    return (
      <div className="mealsDiv">
        <h1>
          Our <span>Popular</span>Meals
        </h1>
        <div className="loadingDiv">
          <img
            src="https://i.pinimg.com/originals/45/12/4d/45124d126d0f0b6d8f5c4d635d466246.gif"
            alt="loadingGif"
          />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="mealsDiv">
        <h1>
          Our <span>Popular</span>Meals
        </h1>
        <p className="errorMsg">{isError}</p>
      </div>
    );
  }
  return (
    <div className="mealsDiv">
      <h1>
        Our <span>Popular</span>Meals
      </h1>
      <div className="mealsContainer">
        {mealsData.map((meal) => {
          return (
            <MealsItem
              key={meal.id}
              price={meal.price}
              id={meal.id}
              title={meal.title}
              amount={meal.amount}
              desc={meal.desc}
              img={meal.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
