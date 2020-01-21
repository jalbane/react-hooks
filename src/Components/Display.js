import React, {useState} from 'react';
import '../display.css'

export default function Display(props){
	let [date, setDate] = useState(Date());

	const displayDate = () => {
		date = date.split('GMT');
		return date[0];
	}

	return (
		<div style = {{ 
						backgroundColor: '#fff',
						fontSize: 12
					 }}>
			{ props.completed 
			 ? <span><button onClick = {() => props.handleDelete(props.index)}> Delete </button></span>
			 : <span><button onClick = {() => props.handleComplete(props.index)}> Complete </button></span>
			}
			<div className = 'todo-text'> 
				{displayDate()}
				<br></br>
				{props.text}  
			</div>
		</div>
	);
}