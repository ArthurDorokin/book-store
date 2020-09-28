import React, {Component} from "react";
import Header from "../header";
import Basket from "../pages/basket";

class Layout extends Component {

    state = {active: false}

    toggleClass = () => {
        const active = this.state.active;
        this.setState({
            active: !active
        })
    }

    render() {
        return (
            <div className={`${"main"}${this.state.active ? " active" : ""}`}>
                <div className="container">
                    <Header toggleClass={this.toggleClass} />
                    <Basket />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout