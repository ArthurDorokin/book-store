import React, {Component} from "react";
import './Details.css'
import {connect} from "react-redux";
import {takeProductId} from "../../redux/actions/details";
import {addToCart} from "../../redux/actions/cart";

class Details extends Component {
    render() {
        const {details} = this.props.details

        return (
            <div className="details">
                {details.map((item) =>
                    <div className="book-item" key={item.id}>
                        <div className="wrap-details">
                            <div className="img-book">
                                <img src={item.img} alt={item.alt}/>
                            </div>
                            <div className="info-details">
                                <div className="title">
                                    <h3>{item.title}</h3>
                                </div>
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
                                <div className="info-price-control">
                                    <div className="price"><strong>{item.price} uah</strong></div>
                                    <div className="btn-book">
                                        <button onClick={() => this.props.addToCart(item.id)}>{item.buy}</button>
                                    </div>
                                </div>
                                <div className="list-in-info">
                                    <div className="isbn"><strong>ISBN:</strong> {item.detailedInformation.ISBN}
                                    </div>
                                    <div className="format">
                                        <strong>Format:</strong> {item.detailedInformation.format}
                                    </div>
                                    <div className="numberOfPages"><strong>Number
                                        Pages:</strong> {item.detailedInformation.numberOfPages}</div>
                                    <div className="yearOfPublication"><strong>Year
                                        Publication:</strong> {item.detailedInformation.yearOfPublication}</div>
                                    <div className="publishingHouse"><strong>Publishing
                                        House:</strong> {item.detailedInformation.publishingHouse}</div>
                                </div>
                            </div>
                        </div>
                        <div className="description-book">
                            <h4>Everything about the book</h4>
                            <p>{item.info}</p>
                        </div>
                    </div>
                )}
            </div>

        )
    }
}


const mapStateProps = ({details}) => ({
    details: details
})

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})

export default connect(mapStateProps, mapDispatchToProps)(Details);