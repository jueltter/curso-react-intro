import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";
import React from "react";

function TodoCounter({ total, completed }) {
const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </h1>
  );
}

export { TodoCounter };
