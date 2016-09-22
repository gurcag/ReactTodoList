import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import AddListButton from './AddListButton.js';
import Search from './Search.js';

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      listCount: 0,
      listArray: []
    };
    this.onClickRemoveListButton = this.onClickRemoveListButton.bind(this);
  }
  getListIndex(listId) {
    for (var i = 0; i < this.state.listArray.length; i++) {
      if (this.state.listArray[i].props.listId == listId)
        return i;
    }
  };
  addListToListArray() {
    this.setState({
      listCount: ++this.state.listCount,
      listArray: this.state.listArray.concat(<List listId={this.state.listCount - 1} key={this.state.listCount - 1} onClick={this.onClickRemoveListButton} />)
    });
  };
  removeListFromListArray(index) {
    var tempArr = this.state.listArray;
    tempArr.splice(index, 1);
    this.setState({
      listArray: tempArr
    });
  };
  onClickAddListButton() {
    this.addListToListArray();
  };
  onClickRemoveListButton(component, event) {
    var listIndex = this.getListIndex(component.props.listId);
    this.removeListFromListArray(listIndex);
  }
  render() {
    return (
      <div className = "app-container">
        <div className="action-container">
          <AddListButton title="Add New List" onClick={this.onClickAddListButton.bind(this) }/>
          <div className="search-container">
            <Search/>
          </div>
        </div>
        <div className = "list-container">
          {this.state.listArray}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById('rootx'));