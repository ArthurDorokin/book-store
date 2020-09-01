import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Details from "./components/pages/details";
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";

class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product/" component={Details}/>
                </Switch>
            </Layout>

        );
    }
}

export default App;