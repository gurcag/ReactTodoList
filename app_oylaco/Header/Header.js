import React from 'react';
import Profile from './Profile.js';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h2>
                        {this.props.title}
                        OYLA.CO
                    </h2>
                </div>
                <div className="header-links">

                </div>
                <div className="header-profile">
                    <Profile/>
                </div>
            </div>
        );
    }
}