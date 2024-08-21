import { useState } from "react";
import styles from "./First.module.css";

function First({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButton = () => {
    if (todoName && dueDate) {
      onNewItem(todoName, dueDate);
      setTodoName("");
      setDueDate("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter to-do here"
        value={todoName}
        onChange={handleNameChange}
        className={styles.input}
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        className={styles.input}
      />
      <button
        type="button"
        className={styles.addButton}
        onClick={handleAddButton}
      >
        Add
      </button>
    </div>
  );
}

export default First;
