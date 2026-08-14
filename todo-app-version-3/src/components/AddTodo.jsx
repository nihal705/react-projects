import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext
 } from "../store/todo-items-store";
import { useContext } from "react";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  // Check if fields are empty
  const isDisabled = !todoName.trim() || !dueDate;

  return (
    <div className="container">
      <form className="row ng-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter ToDo Here"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            className="form-control"
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success ng-button"
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;