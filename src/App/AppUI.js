import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(props) {
    return (
        <>
    
          <TodoCounter completed={props.completedTodos} total={props.totalTodos}/>
          <TodoSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
    
          {props.loading && <TodosLoading />}
          {props.error && <TodosError />}

          {!props.loading && props.searchedTodos.length === 0 && <EmptyTodos />}

          <TodoList>
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