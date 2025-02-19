import React, { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  const [activeItems, setactiveItems] = useState([]);

  let onBuyButton = (item) => {
    if (activeItems.includes(item)) {
      // If item is already active, remove it
      setactiveItems(activeItems.filter(activeItem => activeItem !== item));
    } else {
      // If item is not active, add it
      setactiveItems([...activeItems, item]);
    }
  }

  return (
    <ul className="list-group">
      {/* map function is used to iterate over an array and return a new array. map function takes a callback function as an argument */}
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handle={() => onBuyButton(item)}
        ></Item>

        // passing functions  via props to child component this comunication is called parent to child communication
      ))}
    </ul>
  );
};
export default FoodItems;
