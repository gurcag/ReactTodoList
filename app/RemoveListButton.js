import React, {Component} from 'react';

export default class RemoveListButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility : false
        };
    }
    render() {
        var customStyle;
        if (this.state.visibility) {
            customStyle = {display: "" };   
        }
        else{
            customStyle = {display: "none" };
        }
        return (
            <div style = {customStyle} className="list-remove-button" onClick={this.props.onClick}>
                <img src="/icon/delete.svg"/>
            </div>
        );
    }
}