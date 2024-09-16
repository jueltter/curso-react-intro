import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTodos = [
  { text:"TODO 1", completed:true},
  { text:"TODO 2", completed:false},
  { text:"TODO 3", completed:false},
  { text:"TODO 4", completed:false},
  { text:"TODO 5", completed:false}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(obj => !!obj.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(obj => {
    const todoText = obj.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => 
          (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)
        )}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
