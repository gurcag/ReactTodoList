import React from 'react';

export default class CheckedItem extends React.Component {
	constructor() {
		super();
		this.state = {
			isChanged: false,
			isChecked: false
		};
	}
	onChangeCheckbox(e) {
		if (e.target.checked != this.state.isChecked) {
			this.setState({ isChecked: e.target.checked });
		}
	}
	render() {
		if (this.state.isChanged) {
			var className = "";
			this.state.isChecked == true ? className = "item checked" : className = "item";
			return (
				<div className={className} key={this.props.itemKey} itemId={this.props.itemId}>
					<input type="checkbox" defaultChecked={this.props.isChecked} tabIndex ="-1" onChange={this.onChangeCheckbox.bind(this) }/>
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