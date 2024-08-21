import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = ({ todoItems, onDeleteItem }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <Todoitem
          key={index}
          todoName={item.name}
          todoTime={item.time}
          onDelete={() => onDeleteItem(index)}
        />
      ))}
    </div>
  );
};

export default Todoitems;
