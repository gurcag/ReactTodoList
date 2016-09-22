import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.js';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app-container">
        <Header/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('rootx'));