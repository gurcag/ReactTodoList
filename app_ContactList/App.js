import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

class MyApp extends Component{
  render()
  {
    return(
      <div>
        <SearchBar />
        <ContactList />
      </div>
    );
  }
}
MyApp.PropTypes={
  contacts: React.PropTypes.arrayOf(PropTypes.object)
}

let contacts = [
  {name : "Ali" , email : "alimailcom"},
  {name : "Ahmet" , email : "alimailcom"},
  {name : "Mehmet" , email : "alimailcom"},
  {name : "Hasan" , email : "alimailcom"},
];

//ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('rootx'));
ReactDOM.render(<MyApp contacts={contacts} />, document.getElementById('rootx'));
