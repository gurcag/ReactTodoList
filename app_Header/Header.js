import React, {Component} from 'react';
import Tab from './Tab.js';

export default class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<h1>{this.props.title}</h1>
				<Tab title="Home" href="#"/>
				<Tab title="Blog" href="#"/>
				<Tab title="News" href="#"/>
				<Tab title="About" href="#"/>
			</div>
		);
	}
}