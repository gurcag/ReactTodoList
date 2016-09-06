import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CheckedItem from './CheckedItem.js';
import ReminderItem from './ReminderItem.js';
import ColorPickerItem from './ColorPickerItem.js';
import RemoveListButton from './RemoveListButton.js';

export default class List extends React.Component {
	constructor() {
		super();
		this.state = {
			bgcolor: "white",
			itemsCount: 1,
			itemArray: [<CheckedItem hasAutoFocus={true} itemId={0} key={0} onChange={this.checkedItemTextOnChanged.bind(this) } onSubmit={this.myOnSubmit.bind(this) }/>]
		};
		this.handleClick = this.handleClick.bind(this);
		this.myOnSubmit = this.myOnSubmit.bind(this);
	}
	componentDidMount() {
		console.log("CDM List");
	}
	componentWillMount() {
		console.log("CWM List");
	}
	componentWillUnmount() {
		console.log("componentWillUnmount List");
	}
	myOnSubmit(component, event) {
		var itemIndex = this.getItemIndex(component.props.itemId);
		this.removeItemFromItemArray(itemIndex);
	};
	checkedItemTextOnChanged(component, event) {
		if (component.refs.txt.value !== "") {
			if (!component.state.isChanged) {
				component.setState({ isChanged: true });
				this.addDefaultItemToItemArray();
			}
		}
		else {
			component.setState({ isChanged: false });
			var itemIndex = this.getItemIndex(component.props.itemId);
			this.removeItemFromItemArray(itemIndex);
		}
	};
	handleClick(component, event) {
		this.setState({ bgcolor: component.props.color })
	};
	getItemIndex(itemId) {
		for (var i = 0; i < this.state.itemArray.length; i++) {
			if (this.state.itemArray[i].props.itemId == itemId)
				return i;
		}
	};
	addDefaultItemToItemArray() {
		this.setState({
			itemsCount: ++this.state.itemsCount,
			itemArray: this.state.itemArray.concat(<CheckedItem itemId={this.state.itemsCount - 1} key={this.state.itemsCount - 1} onChange={this.checkedItemTextOnChanged.bind(this) } onSubmit={this.myOnSubmit.bind(this) } />)
		});
	};
	removeItemFromItemArray(index) {
		var tempArr = this.state.itemArray;
		tempArr.splice(index, 1);
		this.setState({
			itemArray: tempArr
		});
	};
	onHover() {
		this.refs.btn.setState({
			visibility: true
		});
	};
	onMouseLeave() {
		this.refs.btn.setState({
			visibility: false
		});
	};
	render() {
		var customStyle = {
			backgroundColor: this.state.bgcolor
		};
		return (
			<div className="list" style = {customStyle} listId={this.props.listId} onMouseEnter={this.onHover.bind(this) } onMouseLeave={this.onMouseLeave.bind(this) } >
				<RemoveListButton ref="btn" onClick={this.props.onClickX.bind(null,this)}/>
				<div className="list-header">
					<h1>
						{this.props.title}
					</h1>
					<div className="color-picker">
						<ul className="color-picker-ul">
							<ColorPickerItem color="yellow" onClick={this.handleClick}/>
							<ColorPickerItem color="bisque" onClick={this.handleClick}/>
							<ColorPickerItem color="greenyellow" onClick={this.handleClick}/>
						</ul>
					</div>
				</div>
				<div className="item-container">
					{this.state.itemArray}
				</div>
			</div>
		);
	}
}
List.defaultProps = {
	title: "NewList",
	texta: ""
};