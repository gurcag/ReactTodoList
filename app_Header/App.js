import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';

class MyApp extends Component{
  render()
  {
    return(
      <div>
        <Header title="Header Component"/>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById('rootx'));
