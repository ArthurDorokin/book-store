import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => (
    <div className="header">
        <div className="wrap-header">
            <div className="header-title">
                <NavLink to="/">React Redux Book Store</NavLink>
            </div>
            <div className="right-block">
                <div className="price">
                    Total: <span>5780 uah</span>
                </div>
                <div className="basket">
                    Basket <span>3</span>
                </div>
            </div>
        </div>
    </div>
)

export default Header