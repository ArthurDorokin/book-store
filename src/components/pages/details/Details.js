import React from "react";
import './Details.css'

const Details = ({selectProduct}) => (
    <div className="details">
        <div className="book-item" key={selectProduct.id}>
            <div className="img-book">
                <img src={selectProduct.img} alt={selectProduct.alt}/>
            </div>
        </div>
    </div>
)

export default Details