import React, {useState} from 'react';
import '../App.css';
import Display from '../Components/Display';

function App() {
  const [todoText, setTodoText] = useState([]);

  const addTodo = text => {
    const completed = false
    const newTodos = [...todoText, {text, completed}];
    setTodoText(newTodos);
  }

  const completeTask = index => {
    const copy = todoText.slice()
    const completedItem = (copy[index].completed)
    copy.splice(index, 1, {text: copy[index].text, completed: !completedItem} )
    //const newTodos = [...copy];
    setTodoText(copy)
  }

  const deleteTask = index => {
    if (todoText[index].completed){
      const copy = todoText.slice()
      copy.splice(index, 1)
      setTodoText(copy)
    }
  }

  function AddTodo({addTodo}){
    const [value, setValue] = useState([{
      text: ' ',
      completed: false
    }]);

    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }

    return(
      <form onSubmit = {handleSubmit}>
        <input style= {{width: 390}} placeholder = 'Add a Todo...' value = {value.text} onChange = { (e) =>setValue([e.target.value])} />
      </form>
      );
  }
 
  return (
  
  <div className = 'app'>
    <div className = 'todo-list'>
      { todoText.map( (index, i) => <Display text = {index.text} completed = {index.completed} index = {i} key = {index.text} handleComplete = {completeTask} handleDelete = {deleteTask}/> )}
      
      <AddTodo addTodo={addTodo}/>
    </div>
  </div>
  );
}

export default App;