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
        <input style= {{width: '99%', padding: 0, height: 45, fontSize: 24}} placeholder = 'Enter in an item or message...' value = {value.text} onChange = { (e) =>setValue([e.target.value])} method = "post"/>
      </form>
      );
  }
 
  return (
  <div className = 'App'>
    <div className = 'banner'>
      <h1 className = 'header'> To-do list / chat log </h1>
    </div>
    <div className = 'todo-list'>
      { todoText.map( (index, i) => <Display text = {index.text} completed = {index.completed} index = {i} key = {index.text} handleComplete = {completeTask} handleDelete = {deleteTask}/> )}
      <AddTodo addTodo={addTodo}/>
    </div>
  </div>
  );
}

export default App;