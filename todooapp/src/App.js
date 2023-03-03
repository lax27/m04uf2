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

	


  	addTask = (task) => {
	console.log(task);
   	
	if (task.trim() == ""){
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
	<Box 
		sx={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
			
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
