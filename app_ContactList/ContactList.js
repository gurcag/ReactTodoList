import React, {Component, PropTypes} from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component{
  render(){
    return(
      <ul>
        /*{this.props.contacts.map(
          (contact) => <ContactItem key={contact.email}
                                    name={contact.name}
                                    email={contact.email} />
        )}*/
        {this.props.contacts}
      </ul>
    );
  }
}
ContactList.PropTypes = {
  contacts: React.PropTypes.arrayOf(PropTypes.object)
}
export default ContactList;
