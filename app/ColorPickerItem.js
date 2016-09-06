import React from 'react';

export default class ColorPickerItem extends React.Component {
	render() {
		var customStyle = {
			backgroundColor: this.props.color
		};
		return (
			<li style={customStyle} onClick={this.props.onClick.bind(null, this) }></li>
		);
	}
}
ColorPickerItem.propTypes = {
	color: React.PropTypes.string.isRequired
};