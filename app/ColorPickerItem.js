import React ,{Component,PropTypes} from 'react';

export default class ColorPickerItem extends React.Component{
	componentDidMount() {
		console.log("CDM ColorPickerItem");
	}
	componentWillMount() {
		console.log("CWM ColorPickerItem");		
	}
	componentWillUnmount() {
		console.log("componentWillUnmount ColorPickerItem");
	}
	render(){
		var customStyle = {
			backgroundColor : this.props.color
		};
		return(
			<li style={customStyle} onClick={this.props.onClick.bind(null,this)}></li>
		);
	}
}
ColorPickerItem.PropTypes = {
	color : React.PropTypes.string.isRequired
};