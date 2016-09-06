import React, {Component, PropTypes} from 'react';

class ContactItem extends Component{
  render(){
    return(
      <li>
        {this.props.name} - {this.props.email}
      </li>
    );
  }
}

ContactItem.PropTypes = {
  name : React.PropTypes.string.isRequired,
  email : React.PropTypes.string.isRequired,
}

export default ContactItem;
