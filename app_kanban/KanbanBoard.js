import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import List from './List';

class KanbanBoard extends Component {
  constructor(){
    super(...arguments);
    this.state={
      searchTerm: "asdasd"
    };
  }
  handleChange(event){
    this.setState({searchTerm : event.target.value});
    console.log(event.target.value);
  }
  render() {
    return(
      <div className="app">
        <List id='todo' title='To Do' cards={
          this.props.cards.filter((card) => card.status === "todo")
          }
        />
        <List id='in-progress' title='In Progress' cards={
          this.props.cards.filter((card) => card.status === "in-progress")
          }
        />
        <List id='done' title='Done' cards={
          this.props.cards.filter((card) => card.status === "done")
          }
        />
        <p>
          Search : <input type="Search" defaultValue= {this.state.searchTerm} onChange={this.handleChange.bind(this)}
          />
        </p>
      </div>
    );
  }
}
export default KanbanBoard;
