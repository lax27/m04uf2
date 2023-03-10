
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

class TaskItem extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
	}



	openDialog = () => {
		this.setState({
			open:true
		});
	}
	
	closeDialog = () => {
		this.setState({
			open:false
		});
	}

	deleteTask = () => {
		this.props.onDeleteTask(this.props.num_task);
	}

	render(){
	return(
	
		<ListItem>
			<ListItemText primary={this.props.text}/>
			<Tooltip title="Delete" onClick={this.openDialog}>
				<IconButton>
					<DeleteIcon/>
				</IconButton>	
			</Tooltip>
			<Dialog open={this.state.open}>
				<DialogContent>
					<DialogContentText>
					¿Quieres borrar?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={this.closeDialog}>Descartar</Button>
					<Button variant="contained" color="error" onClick={this.deleteTask}>Borrar</Button>
				</DialogActions>
			</Dialog>
		</ListItem>

	   );	
	}
}

export default TaskItem;
