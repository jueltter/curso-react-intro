import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  return (
    <TodoContext.Consumer>
      {({searchValue, setSearchValue}) => (
        <input
          placeholder="Cortar cebolla"
          className="TodoSearch"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      )}
    </TodoContext.Consumer>
  );
}

export { TodoSearch };
