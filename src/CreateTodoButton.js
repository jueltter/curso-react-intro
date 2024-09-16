import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
      <button className='CreateTodoButton'
      onClick={()=> console.log('le diste clic')}>+</button>
    );
  }
  
  export {CreateTodoButton};