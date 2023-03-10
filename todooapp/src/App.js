import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

//import './App.css';
import './toDo.css';
class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasklist: []
		};

	}

	componentDidMount (){
		fetch('http://10.40.1.230:3001')
		.then(response => response.json())
		.then(data => this.createTaskList(data)); 
	}	

	createTaskList = (data) => {
	if (data.length <= 0)
		return;
	
	for (let i = 0; i < data.length; i++){
		this.state.tasklist.push(data[i].item);
	}

	this.setState({
		tasklist: this.state.tasklist
	});
	}

  	addTask = (task) => {
	console.log(task);
	let item = {item: task};
	fetch('http://10.40.1.230:3001', {   //fetch con post
		method: 'POST',
		body: JSON.stringify(item)
	}); 
   	
	if (task.trim() === ""){
	return;
	}

	this.state.tasklist.unshift(task);
	this.setState({
	  tasklist: this.state.tasklist

	});
	}

	deleteTask = (task_num) => {

		this.state.tasklist.splice(task_num,1);
		this.setState({
			tasklist: this.state.tasklist
		});
	}


render(){
  return (
	<Box id="box" 
		sx={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignContent: 'center'	
			
		}}

	>	
		<Paper elevation={3}>
			<Title text="ToDooApp 30000"   />
			<TaskForm onAddTask={this.addTask} />
			<TaskList list={this.state.tasklist} onDeleteTask={this.deleteTask} />
			<p>You have <strong>{this.state.tasklist.length}</strong> pending task</p>
		</Paper>
	</Box>
  );
 }
}
export default App;
