import React from 'react';
import catalog from "../constans";
import './Content.css';

const Content = () => (
    <div className="content">
        <div className="wrap-books">
            {catalog.map((item) =>
                <div className="book-item" key={item.id}>
                    <div className="img-book">
                        <img src={item.img} alt={item.alt}/>
                    </div>
                    <div className="title-book">
                        <h4>{item.title}</h4>
                        <h5>{item.author}</h5>
                    </div>
                    <div className="btn-book">
                        <button>{item.buy}</button>
                    </div>
                    <div className="price-book">uah {item.price}</div>
                    <div className="rating-book">
                        Rating:
                        <div className="rating-star">
                            <div className={`${"rating-span"} ${item.rating.classRating}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="quantityStar">{item.rating.num}/5</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
)

export default Content;