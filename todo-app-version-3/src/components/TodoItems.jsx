import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { AiFillDelete } from "react-icons/ai";

const TodoItems = () => {

  const {todoItems, deleteItem} = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map(item => (
        <div className={styles.row} key={item.name}>
          <div className={styles.col6}>
            {item.name}
          </div>
          <div className={styles.col4}>
            {item.dueDate}
          </div>
          <div className={styles.col2}>
            <button type="button" className="btn btn-danger ng-button" onClick={() => deleteItem(item.name)}><AiFillDelete /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;