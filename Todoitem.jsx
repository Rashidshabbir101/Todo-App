import styles from "./Todoitem.module.css";

const Todoitem = ({ todoName, todoTime, onDelete }) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoDetails}>
        <span className={styles.todoName}>{todoName}</span>
        <span className={styles.todoTime}>{todoTime}</span>
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Todoitem;
