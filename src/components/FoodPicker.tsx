import React, { useState } from "react";
import FoodItems from "./FoodItems";
export default function FoodPicker({foodQuantities, setFoodQuantities}: any) {
 

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
      <FoodItems
        name="Burgers"
        count={foodQuantities.burger}
        price={foodPrices.burger}
        increment={() => incrementFood("burger")}
        decrement={() => decrementFood("burger")}
      />
      <div className="mt-4">
        <FoodItems
          name="Salads"
          count={foodQuantities.salad}
          price={foodPrices.salad}
          increment={() => incrementFood("salad")}
          decrement={() => decrementFood("salad")}
        />
      </div>
      <div className="mt-4">
        <h2>Total Price: ${calculateTotalPrice()}</h2>
      </div>
    </div>
  );
}
