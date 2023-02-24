import React from 'react';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './App.css';

class App extends React.Component{
	constructor(props){
		super(props);


		this.state = {
			tasklist: []
		};

	}




  	addTask = (task) => {
	console.log(task);
    
	this.state.tasklist.unshift(task);
	this.setState({
	  tasklist: this.state.tasklist

	});


	}


render(){
  return (
<main className="App">	
	<Title text="ToDooApp 30000"   />
	<TaskForm onAddTask={this.addTask} />
	<TaskList list={this.state.tasklist} />
	<p>You have <strong>{this.state.tasklist.length}</strong> pending task</p>
</main>
  );
 }
}
export default App;
