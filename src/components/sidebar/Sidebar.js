import React, {Component} from 'react';
import './Sidebar.css';
import {filterList} from "../constans";
import {connect} from "react-redux";
import {setSearch} from "../redux/actions/search";
import {setFilter} from "../redux/actions/filter";

class Sidebar extends Component {

    onUpdateSearch = (event) => {
        this.props.setSearch(event.target.value)
    };

    render() {
        return (
            <div className="sidebar">
                {filterList.map((item) =>
                    <div className={`${"item-sort"} ${item.class}`} key={item.value}
                         onClick={() => this.props.setFilter(item.value)}
                    >{item.label}</div>
                )}
                <div className="search">
                    <input className="input-search"
                           type="text"
                           placeholder='Search book...'
                           onChange={this.onUpdateSearch}
                    />
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setSearch: (search) => dispatch(setSearch(search)),
    setFilter: (value) => dispatch(setFilter(value)),
})

export default connect(null, mapDispatchToProps)(Sidebar);