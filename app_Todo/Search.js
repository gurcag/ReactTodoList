import React from 'react';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchable: false
        };
    }
    onClick() {
        if (this.state.searchable) {
            console.log("asds");
        }
    }
    onChangeSearchTextbox(event) {
        if (event.target.value.length == 0) {
            if (this.state.searchable) {
                this.setState({ searchable: false });
            }
        }
        else {
            if (!this.state.searchable) {
                this.setState({ searchable: true });
            }
        }
    }
    render() {
        if (this.state.searchable) {
            var customStyle = {
                cursor: "pointer",
                opacity: "1"
            };
        }
        else {
            var customStyle = {
                cursor: "",
                opacity: "0.3"
            };
        }
        return (
            <div className="search-input">
                <div style={customStyle} className="search-input-img" onClick={this.onClick.bind(this)}>
                    <img src="icon/search.png"/>
                </div>
                <input type="text" placeholder="type" value={this.props.text} onChange={this.onChangeSearchTextbox.bind(this) }/>
            </div>
        );
    }
}