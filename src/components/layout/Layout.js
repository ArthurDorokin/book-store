import React, {Component} from "react";
import Header from "../header";
import Basket from "../pages/basket";
import {Switch} from "react-router-dom";

class Layout extends Component {

    render() {
        return (
            <div className="main">
                <div className="container">
                    <Header/>
                    <Basket />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout