
import React from 'react';
import TaskItem from './TaskItem';

class TaskList  extends React.Component{
	constructor (props){
		super(props);

		this.state = {
			items: this.props.list
		};
	}
	 
	

	render(){
	const tasks = this.state.items.map(task => {
	return(
		<TaskItem text={task} />
		);

		
	});

	return(

		 <ol>
			{tasks}
		 </ol>
			
		);
	}

}

export default TaskList;
