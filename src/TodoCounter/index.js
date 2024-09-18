import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter({ total, completed }) {
  return (
    <TodoContext.Consumer>
      {({ completed, total }) => (
        <h1 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </h1>
      )}
    </TodoContext.Consumer>
  );
}

export { TodoCounter };
