import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import AddNewListButton from './AddNewListButton.js';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      listCount: 0,
      listArray: []
    };
  }
  componentDidMount() {
    console.log("CDM MyApp");
  }
  componentWillMount() {
    console.log("CWM MyApp");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount MyApp");
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
      listArray: this.state.listArray.concat(<List listId={this.state.listCount - 1} key={this.state.listCount - 1} onClickX={this.onClickRemoveListButton} />)
    });
  };
  removeListFromListArray(index) {
    var tempArr = this.state.listArray;
    tempArr.splice(index, 1);
    this.setState({
      listArray: tempArr
    });
  };
  onClickAddNewListButton() {
    this.addListToListArray();
  };
  onClickRemoveListButton(component, event) {
    var listIndex = getListIndex(component.props.listId);
    this.removeListFromListArray(listIndex);
  }
  render() {
    return (
      <div className = "app-container">
        <div className="action-container">
          <AddNewListButton onButtonClick={this.onClickAddNewListButton.bind(this) }/>
        </div>
        <div className = "list-container">
          {this.state.listArray}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById('rootx'));