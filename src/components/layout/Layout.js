import React, {Component} from "react";
import Header from "../header";

class Layout extends Component {

    render() {
        return (
            <div className="main">
                <div className="container">
                    <Header/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout