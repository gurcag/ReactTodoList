import React, {Component} from 'react';
import CheckList from './CheckList';

class Card extends Component {
  constructor(){
    super(...arguments);
    this.state={
      showDetails:false
    };
  }
  myfunc(){
    console.warn(this.props.title);
  }
  render() {
    let cardDetails;
    //this.myfunc();
    if (this.state.showDetails) {
      cardDetails=(
        <div className="card_details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      );
    };
    return(
      <div className="card">
        <div className="card_title" onClick={()=> this.setState({showDetails: !this.state.showDetails})}>
          {this.props.title}
        </div>
        {cardDetails}
        // <div className="card_details">
        //   {this.props.description}
        //   <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
        // </div>
      </div>
    )
  };
}

export default Card;
