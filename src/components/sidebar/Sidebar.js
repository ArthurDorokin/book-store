import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
    <div className="sidebar">
        <div className="all">All</div>
        <div className="popular">Popular</div>
        <div className="price-">Price (expensive)</div>
        <div className="price">Price (cheap)</div>
        <div className="author">Author</div>
        <div className="search">
            <input type="search" placeholder='Search book...' />
        </div>
    </div>
)

export default Sidebar;