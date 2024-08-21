import Firstname from "./components/Firstname";
import First from "./components/First";
import Todoitems from "./components/Todoitems.jsx";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      time: "2024-07-04",
    },
    {
      name: "Go to college",
      time: "2024-08-01",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, time: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedItems);
  };

  return (
    <div className={styles.todoContainer}>
      <Firstname />
      <First onNewItem={handleNewItem} />
      <Todoitems todoItems={todoItems} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
