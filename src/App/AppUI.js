import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI(props) {
    return (
        <>
    
          <TodoCounter completed={props.completedTodos} total={props.totalTodos}/>
          <TodoSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
    
          <TodoList>
            {props.loading && <p>Estamos cargando...</p>}
            {props.error && <p>Error</p>}

            {!props.loading && props.searchedTodos.length === 0 && <p>Agrega un TODO</p>}

            {props.searchedTodos.map(todo => 
              (<TodoItem key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => props.completeTodo(todo.text)}
                onDelete={() => props.deleteTodo(todo.text)}
                />)
            )}
          </TodoList>
    
          <CreateTodoButton />
        </>
      );
}

export {AppUI}