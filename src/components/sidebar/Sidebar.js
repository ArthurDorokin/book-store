import React, {Component} from 'react';
import './Sidebar.css';
import {filterList} from "../constans";
import {connect} from "react-redux";
import {takeFilter} from "../redux/actions/filter";
import {setSearch} from "../redux/actions/search";

class Sidebar extends Component {

    onUpdateSearch = (event) => {
        this.props.setSearch(event.target.value)
    };

    render() {
        return (
            <div className="sidebar">
                {filterList.map((item) =>
                    <div className={`${"item-sort"} ${item.class}`} key={item.value}
                         onClick={() => this.props.takeFilter(item.value)}
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
    takeFilter: (id) => dispatch(takeFilter(id)),
    setSearch: (search) => dispatch(setSearch(search))
})

export default connect(null, mapDispatchToProps)(Sidebar);