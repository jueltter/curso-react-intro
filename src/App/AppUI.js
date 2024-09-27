import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import React from "react";

function AppUI() {
  const {searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal} = React.useContext(TodoContext);


  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <>
            {loading && <TodosLoading />}
            {error && <TodosError />}

            {!loading && searchedTodos.length === 0 && (
              <EmptyTodos />
            )}

            <TodoList>
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </>

      <CreateTodoButton />

      { openModal && (
        <Modal>
          Texto Modal
        </Modal>)}
    </>
  );
}

export { AppUI };
