import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
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
            <button type="button" className="btn btn-danger ng-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;