import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Details from "./components/pages/details";
import catalog from "./components/constans";
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";

class App extends Component {
    state = {
        catalog,
        selectProduct: ''
    }

    getProduct = (id) => {
        const catalog = this.state.catalog;
        const res = catalog.filter(item => item.id === id);
        const [card] = res;
        this.setState({selectProduct: {...card}});
    };

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={(props) => <Home
                        catalog={this.state.catalog}
                        getProduct={this.getProduct}
                    />}/>
                    <Route path="/product/" component={(props) => <Details
                        selectProduct={this.state.selectProduct}
                    />}/>
                </Switch>
            </Layout>

        );
    }
}

export default App;
