import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
    <div className="sidebar">
        <div className="all item-sort hover">All</div>
        <div className="popular item-sort">Popular</div>
        <div className="price-expensive item-sort">Price (expensive)</div>
        <div className="price-cheap item-sort">Price (cheap)</div>
        <div className="author item-sort">Author</div>
        <div className="search">
            <input className="input-search" type="search" placeholder='Search book...' />
        </div>
    </div>
)

export default Sidebar;