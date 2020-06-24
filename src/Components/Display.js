import React, {useState} from 'react';
import '../display.css';

export default function Display(props){
	let [date] = useState(Date());

	const displayDate = () => {
		date = date.split("GMT");
		return date[0];
	}

	return (
		<div style = {{ 
						backgroundColor: '#fff',
						fontSize: 12
					 }}>
			{ props.completed 
			 ? <div className = 'btn'><button onClick = {() => props.handleDelete(props.index)}> Delete Task</button></div>
			 : <div className = 'btn'><button onClick = {() => props.handleComplete(props.index)}> Complete Task</button></div>
			}
			<div className = 'time-stamp'>
				{displayDate()}
			</div>
			<br></br>
			<div className = 'todo-text'> 
				{props.text}  
			</div>
		</div>
	);
}