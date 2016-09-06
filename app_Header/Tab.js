import React, {Component} from 'react';

export default class Tab extends React.Component{
	render(){
		return(
			<div className="tab">
				<a href={this.props.href}>{this.props.title}</a>
			</div>
		);
	}
}