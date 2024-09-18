import React from 'react';

import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import './App.css';

function App() {

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(obj => !!obj.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(obj => {
    const todoText = obj.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(obj => obj.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(obj => obj.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return ( <AppUI
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        loading={loading}
        error={error}
  
  />);
}

export default App;
