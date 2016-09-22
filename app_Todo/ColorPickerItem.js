import React from 'react';

export default class ColorPickerItem extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		console.log("XXXXX");
	}
	render() {
		var customStyle = {
			backgroundColor: this.props.color
		};
		return (
			<li style={customStyle} onClick={this.props.onClick.bind(null, this)}>{this.props.textq}</li>
		);
	}
}
ColorPickerItem.propTypes = {
	color: React.PropTypes.string.isRequired,
	textq: React.PropTypes.string
};
ColorPickerItem.defaultProps = {
	textq: ""
};