import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Logo.css";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <NavLink to="/" className="link">
                    leo's blog
                </NavLink>
            </div>
        );
    }
}

export default Logo;