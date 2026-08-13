import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [ textToShow, setTextState ] = useState();
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if ( event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value enetered is: " + newFoodItem);
    }
  };

  return (
    <>
      <Container> 
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App
