import React, {Component} from "react";
import Content from "../content";
import Sidebar from "../sidebar";

class Home extends Component {
    render() {
        return (
            <div className="wrap-content">
                <Content />
                <Sidebar />
            </div>
        )
    }
}

export default Home