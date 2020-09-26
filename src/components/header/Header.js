import React, {Component} from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="wrap-header">
                    <div className="header-title">
                        <NavLink to="/">React Redux Book Store</NavLink>
                    </div>
                    <div className="right-block">
                        <div className="price">
                            Total: <span>0 uah</span>
                        </div>
                        <div className="basket" onClick={() => this.props.toggleClass()}>
                            Basket <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header