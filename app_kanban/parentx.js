import React, {Component} from 'react';

class Parentx extends Component{
  render(){
    return(
      <div className="app">
        <h1>
          qweqweqweqweqweqweqwe
          {this.props.myprop}
        </h1>
      </div>
    );
  }
}
//ReactDOM.render(<parentx/>,document.getElementById('rootx'));
export default Parentx;
