import React from "react";
import './Details.css'

const Details = ({selectProduct}) => (

    <div className="details">
        <div className="book-item" key={selectProduct.id}>
            <div className="wrap-details">
                <div className="img-book">
                    <img src={selectProduct.img} alt={selectProduct.alt}/>
                </div>
                <div className="info-details">
                    <div className="title">
                        <h3>{selectProduct.title}</h3>
                    </div>
                    <div className="rating-book">
                        Rating:
                        <div className="rating-star">
                            <div className={`${"rating-span"} ${selectProduct.rating.classRating}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="quantityStar">{selectProduct.rating.num}/5</div>
                        </div>
                    </div>
                    <div className="info-price-control">
                        <div className="price"><strong>{selectProduct.price} uah</strong></div>
                        {/*<div className="counter"></div>*/}
                        <div className="btn-book">
                            <button>{selectProduct.buy}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-book">
                <h4>Everything about the book</h4>
                <p>{selectProduct.info}</p>
            </div>
        </div>
    </div>
)

export default Details