import React from "react";
import './Header.css'

const Header = () => (
    <div className="header">
        <div className="wrap-header">
            <div className="header-title">
                React Redux Book Store
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