import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Item from "./Item";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todos = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todos.items.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          onRemoveTodo={todos.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
