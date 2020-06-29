import React, {useState} from 'react';
import '../display.css';

export default function Display(props){
	let [date] = useState(Date());
	let time;
	let dateYear = new Date();
	dateYear = dateYear.getYear();
	
	const displayDate = () => {	
		/*getYear() returns how many years have elapsed since 1900.
		1900 years + years elapsed since 1900 equals current year*/
		date = date.split(1900 + dateYear);
		time = date[1]
		time = time.split(":")
		time = time.splice(0, 2)
		if (time[0] > 12){
			time[0] %= 12
		}
		return (date[0] + ' ' + time[0] + ':' + time[1]);
	}

	return (
		<div id= "main" style = {{ 
						fontSize: 12,
						border: 'solid 1px',
						boxShadow: '0px 0px 4px',
						borderTop: 'none'
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