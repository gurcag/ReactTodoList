import React, {Component} from 'react';

export default class ReminderItem extends React.Component{
	render(){
		return(
			<div>
				<input type="text" value={this.props.text}/>
				<input type="number" pattern="[0-9]*" defaultValue="5" />
			</div>
		);
	}
}