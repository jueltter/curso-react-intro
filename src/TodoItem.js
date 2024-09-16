function TodoItem(props) {
    return (
      <li>
        { props.completed ? (<span>V</span>) : (<span>X</span>)}
        <p>{props.text}</p>
        
      </li>
    );
  }
  
  export {TodoItem};