import "./TodoItem.css"
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <CompleteIcon completed={props.completed}
          onComplete={props.onComplete}/>
        {/*<span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}>V</span>*/}
        <p className={`TodoItem=p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        {/*<span className="Icon Icon-delete"
        onClick={props.onDelete}
        >x</span>*/}
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }
  
  export {TodoItem};