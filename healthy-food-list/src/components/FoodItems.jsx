import Item from "./Item";
import styles from './FoodItems.module.css'
import { useState } from "react";

const FoodItems = ( {items} ) => {

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  }

  return (
    <>
      <ul className="list-group">
          {items.map((item) => (
          <Item key={item} foodItem={item} bought={activeItems.includes(item)} handleBuyButtonClicked = {(event) => onBuyButton(item, event)} />
          ))} 
        </ul>
    </>
  );
}

export default FoodItems;