import React, {Component, PropTypes} from 'react';

export default class AddNewListButton extends Component {
    componentDidMount() {
		console.log("CDM AddNewListButton");
	}
	componentWillMount() {
		console.log("CWM AddNewListButton");		
	}
	componentWillUnmount() {
		console.log("componentWillUnmount AddNewListButton");
	}
    render() {
        return (
            <div className="action-button-container" onClick={this.props.onButtonClick}>
                <div className="action-button">
                    <img src="/icon/add.svg"/>
                    <h2>Add Check List</h2>
                </div>
            </div>
        );
    }
}
AddNewListButton.propTypes = {

};