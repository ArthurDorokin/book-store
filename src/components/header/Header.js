import React, {Component} from "react";
import './Header.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        const {cart} = this.props.cart

        return (
            <div className="header">
                <div className="wrap-header">
                    <div className="header-title">
                        <NavLink to="/">React Redux Book Store</NavLink>
                    </div>
                    <div className="right-block">
                        <div className="price">
                            Total: <span>{cart.reduce((total, item) =>  total + item.priceSumBasket, 0)} uah</span>
                        </div>
                        <div className="basket" onClick={() => this.props.toggleClass()}>
                            Basket <span>{cart.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cart}) => ({cart: cart})

export default connect(mapStateToProps, null)(Header);