import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems ></TodoItems>
      </center>
    </TodoItemsContextProvider>
  )
};

export default App;