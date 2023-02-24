
import React from 'react';

class TaskForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			task: ""
		};

	}
	render (){
		return(
			<form>
			<p><input type="text" value={this.state.task} onChange={event => {
	
				console.log(event.target.value)	
				this.setState({
					task:event.target.value
				});

			}} placeholder="Escribe una nueva tarea"/></p>
			<p><button type="button" onClick={() => {

				this.props.onAddTask(this.state.task);
				this.setState({
					task:""
				});
			}}>+</button></p>
		</form>
		);
	}
}
export default TaskForm;

