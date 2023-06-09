import React, { useState } from "react";
import FoodItems from "./FoodItems";
import salada from "../images/salada.png";
import burger from "../images/burger.png";

export default function FoodPicker({ foodQuantities, setFoodQuantities }: any) {
  const foodPrices = {
    burger: 5.99,
    salad: 8.99,
  };

  const incrementFood = (food: string) => {
    // @ts-ignore
    setFoodQuantities((prevQuantities) => ({
      ...prevQuantities,
      [food]: (prevQuantities[food] || 0) + 1,
    }));
  };

  const decrementFood = (food: string) => {
    // @ts-ignore
    if (foodQuantities[food] && foodQuantities[food] > 0) {
      // @ts-ignore
      setFoodQuantities((prevQuantities) => ({
        ...prevQuantities,

        // @ts-ignore
        [food]: prevQuantities[food] - 1,
      }));
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const food in foodQuantities) {
      // @ts-ignore
      total += foodQuantities[food] * foodPrices[food];
    }
    return total.toFixed(2);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row gap-2">
        <FoodItems
          image={burger}
          name="Burgers"
          count={foodQuantities.burger}
          price={foodPrices.burger}
          increment={() => incrementFood("burger")}
          decrement={() => decrementFood("burger")}
          />

        <FoodItems
          image={salada}
          name="Salads"
          count={foodQuantities.salad}
          price={foodPrices.salad}
          increment={() => incrementFood("salad")}
          decrement={() => decrementFood("salad")}
        />
      </div>
      <div className="mt-4">
        <h2 className="bold-lg text-lg">
          Total Price: ${calculateTotalPrice()}
        </h2>
      </div>
    </div>
  );
}
