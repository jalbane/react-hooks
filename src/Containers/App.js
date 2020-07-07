import React, {useState} from 'react';
import '../App.css';
import Display from '../Components/Display';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import image from '../white-walls-1764702.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      addTodo(value);
      
        fetch('http://localhost:3001/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              text: value
          })
        })
        .then(reponse => reponse.json)
     
      
      setValue('');
    }

    const onChange = event => setValue(event.target.value);

    return(
      <Container fluid = "sm">
        <Row sm = {12}>
          <Col sm = {12}>
            <form onSubmit = {handleSubmit}>
              <input style= {{ marginTop: 10, width: '100%',height: 45, fontSize: 24}} placeholder = 'Enter in an item or message...' value = {value.text} onChange = { (e) =>setValue([e.target.value])} method = "post" required/>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
 
  return (
    <div className = 'App'>
      <Container fluid = "sm">
        <Row sm = {12}>
          <Col className = 'banner' sm = {{span: 3}}><h3> Chat log / to-do list </h3></Col>
        </Row>
        <Row sm = {12} className = 'todo-list'>
          <Col sm = {{span: 10, offset: 1}}>
            { todoText.map( (index,i) => <Display text = {index.text} index = {i} key ={i} completed = {index.completed} handleComplete = {completeTask} handleDelete = {deleteTask}/> )}
            <AddTodo addTodo={addTodo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;