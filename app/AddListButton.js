import React from 'react';

export default class AddListButton extends React.Component {
    
    render() {
        return (
            <div className="action-button-container" onClick={this.props.onClick}>
                <div className="action-button">
                    <img src="/icon/add.svg"/>
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        );
    }
}
AddListButton.propTypes = {
    title : React.PropTypes.string.isRequired
};
AddListButton.defaultProps = {
	title: "default_button_title"
};