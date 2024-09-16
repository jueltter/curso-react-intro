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
  return (
    <>

      <TodoCounter completed="2" total="5"/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => 
          (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)
        )}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
