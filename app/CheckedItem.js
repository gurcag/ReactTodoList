import React, {Component, PropTypes} from 'react';

export default class CheckedItem extends React.Component {
	constructor() {
		super();
		this.state = {
			isChanged: false,
			mount: true
		};
	}
	componentDidMount() {
		console.log("CDM CheckedItem");
	}
	componentWillMount() {
		console.log("CWM CheckedItem");		
	}
	componentWillUnmount() {
		console.log("componentWillUnmount CheckedItem");
	}
	render() {
		if (this.state.isChanged) {
			return (
				<div className = "item" key={this.props.itemKey} itemId={this.props.itemId}>
					<input type="checkbox" defaultChecked={this.props.isChecked} tabIndex ="-1"/>
					<input type="text" ref="txt" value={this.props.texta} onChange={this.props.onChange.bind(null, this) } name={this.props.isChanged} />
					<input type="button" value="x" onClick={this.props.onSubmit.bind(null, this) } tabIndex ="-1"/>
				</div>
			);
		}
		else {
			return (
				<div className = "default item" key={this.props.itemKey} itemId={this.props.itemId}>
					<input type="checkbox" defaultChecked={this.props.isChecked}/>
					<input autoFocus={this.props.hasAutoFocus} type="text" ref="txt" placeholder="Add new note" value={this.props.texta} onChange={this.props.onChange.bind(null, this) } name={this.props.isChanged} />
				</div>
			);
		}
	}
}
CheckedItem.propTypes = {
	texta: React.PropTypes.string.isRequired
}
CheckedItem.defaultProps = {
	isChecked: false
};