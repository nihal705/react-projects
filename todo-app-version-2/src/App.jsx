import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
    name:'Buy Milk', 
    dueDate:'26/07/2026'
    },
    {
    name:'Go to Gym', 
    dueDate:'26/07/2026'
    }
  ]

  return (
    <center className="todo-container">
      <AppName></AppName> 
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
};

export default App;