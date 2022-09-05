import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import "./TopNav.css";

class TopNav extends Component<{}, {}> {

    render() {
        return (
            <div className="menu">
                <div>
                    <NavLink to="#">Projects</NavLink>
                </div>
                <div>
                    <NavLink to="/" >Home</NavLink>
                </div>
            </div>
        );
    }
}

export default TopNav;