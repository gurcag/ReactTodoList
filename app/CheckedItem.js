import React from 'react';

export default class CheckedItem extends React.Component {
	constructor() {
		super();
		this.state = {
			isChanged: false
		};
	}
	render() {
		if (this.state.isChanged) {
			return (
				<div className = "item" key={this.props.itemKey} itemId={this.props.itemId}>
					<input type="checkbox" defaultChecked={this.props.isChecked} tabIndex ="-1"/>
					<input type="text" ref="txt" value={this.props.text} onChange={this.props.onChange.bind(null, this) } />
					<input type="button" value="x" onClick={this.props.onClick.bind(null, this) } tabIndex ="-1"/>
				</div>
			);
		}
		else {
			return (
				<div className = "default item" key={this.props.itemKey} itemId={this.props.itemId}>
					<input type="checkbox" defaultChecked={this.props.isChecked}/>
					<input autoFocus={this.props.autoFocus} type="text" ref="txt" placeholder="Add new note" value={this.props.text} onChange={this.props.onChange.bind(null, this) } />
				</div>
			);
		}
	}
}
CheckedItem.propTypes = {
	itemKey: React.PropTypes.number.isRequired,
	itemId: React.PropTypes.number.isRequired,
	defaultChecked: React.PropTypes.bool,
	text: React.PropTypes.string,
	autoFocus: React.PropTypes.bool,
}
CheckedItem.defaultProps = {
	isChecked: false,
	autoFocus: false
};