import React, {Component} from "react";
import './Basket.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {removeFromCart} from "../../redux/actions/cart";
import {takeProductId} from "../../redux/actions/details";

class Basket extends Component{
    render() {
        const {cart} = this.props.cart

        return(
            <div className="basket-block">
                <div className="basket-wrap">
                    {cart.map(item =>
                        <div className="book-item" key={item.id}>
                            <NavLink to={item.link} onClick={() => this.props.takeProductId(item.id)}>
                                <div className="img-book">
                                    <img src={item.img} alt={item.alt}/>
                                </div>
                                <div className="title-book">
                                    <h4>{item.title}</h4>
                                    <h5>{item.author}</h5>
                                </div>
                            </NavLink>
                            <div className="delete" onClick={() => this.props.removeFromCart(item.id)}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cart}) => {
    return {
        cart: cart
    }
}

const mapDispatchToProps = dispatch => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    takeProductId: (id) => dispatch(takeProductId(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);