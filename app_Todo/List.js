import React from 'react';
import ReactDOM from 'react-dom';
import CheckedItem from './CheckedItem.js';
import ColorPickerItem from './ColorPickerItem.js';
import RemoveListButton from './RemoveListButton.js';

export default class List extends React.Component {
	constructor() {
		super();
		this.state = {
			backgroundColor: "white",
			itemsCount: 1,
			itemArray: [<CheckedItem autoFocus={true} itemId={0} key={0}
				onChange={this.checkedItemTextOnChanged.bind(this) }
				onClick={this.onClickCheckedItem.bind(this) }/>]
		};
		this.onClickColorPickerItem = this.onClickColorPickerItem.bind(this);
		this.onClickCheckedItem = this.onClickCheckedItem.bind(this);
	}
	onClickCheckedItem(component, event) {
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
	onClickColorPickerItem(component, event) {
		this.setState({ backgroundColor: component.props.color });
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
			itemArray: this.state.itemArray.concat(<CheckedItem itemId={this.state.itemsCount - 1}
				key={this.state.itemsCount - 1}
				onChange={this.checkedItemTextOnChanged.bind(this) }
				onClick={this.onClickCheckedItem.bind(this) } />)
		});
	};
	removeItemFromItemArray(index) {
		var tempArr = this.state.itemArray;
		tempArr.splice(index, 1);
		this.setState({
			itemArray: tempArr
		});
	};
	onMouseEnter() {
		this.refs.removeListButton.setState({
			visibility: true
		});
	};
	onMouseLeave() {
		this.refs.removeListButton.setState({
			visibility: false
		});
	};
	render() {
		var customStyle = {
			backgroundColor: this.state.backgroundColor
		};
		return (
			<div className="list" style = {customStyle} listId={this.props.listId}
				onMouseEnter={this.onMouseEnter.bind(this) }
				onMouseLeave={this.onMouseLeave.bind(this) } >
				<RemoveListButton ref="removeListButton" onClick={this.props.onClick.bind(null, this) }/>
				<div className="list-header">
					<h1>
						{this.props.title}
					</h1>
					<div className="color-picker">
						<ul className="color-picker-ul">
							<ColorPickerItem color="yellow" onClick={this.onClickColorPickerItem}/>
							<ColorPickerItem color="bisque" onClick={this.onClickColorPickerItem}/>
							<ColorPickerItem color="greenyellow" onClick={this.onClickColorPickerItem}/>
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
List.propTypes = {
	listId: React.PropTypes.number.isRequired,
	title: React.PropTypes.string.isRequired,
	tag: React.PropTypes.string
};
List.defaultProps = {
	title: "NewList"
};