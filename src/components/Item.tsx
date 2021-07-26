import classes from "./Item.module.css";

const Item: React.FC<{ onRemoveTodo: () => void; text: string }> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default Item;
