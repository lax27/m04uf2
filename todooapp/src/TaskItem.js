
import React from 'react';

class TaskItem extends React.Component{
	constructor(props){
	super(props);
	
	}
	render(){
	return(
	
		<li>{this.props.text} <button type="button">🗑️</button></li>

	   );	
	}
}

export default TaskItem;
