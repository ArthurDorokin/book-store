import React, {Component} from 'react';
import './Sidebar.css';
import {filterList} from "../constans";
import {connect} from "react-redux";
import {takeFilter} from "../redux/actions/filter";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {filterList.map((item) =>
                    <div className={`${"item-sort"} ${item.class}`} key={item.value}
                         onClick={() => this.props.takeFilter(item.value)}
                    >{item.label}</div>
                )}
                <div className="search">
                    <input className="input-search" type="search" placeholder='Search book...'/>
                </div>
            </div>
        )
    }
}

// export default Sidebar;

// const mapStateProps = ({filterList}) => ({
//     filterList: filterList
// })

const mapDispatchToProps = dispatch => ({
    takeFilter: (id) => dispatch(takeFilter(id))
})

export default connect(null, mapDispatchToProps)(Sidebar);