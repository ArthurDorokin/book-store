import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import './Content.css';
import {setBooks} from "../redux/actions/books";

class Content extends Component {
    render() {
        const {books, addToCart} = this.props.books

        return (
            <div className="content">
                <div className="wrap-books">
                    {books.map((item) =>
                        <div className="book-item" key={item.id}>
                            <NavLink to={item.link} onClick={() => this.props.getProduct(item.id)}>
                                <div className="img-book">
                                    <img src={item.img} alt={item.alt}/>
                                </div>
                                <div className="title-book">
                                    <h4>{item.title}</h4>
                                    <h5>{item.author}</h5>
                                </div>
                            </NavLink>
                            <div className="btn-book">
                                <button onClick={addToCart}>{item.buy}</button>
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
    }

}


const mapStateProps = ({books}) => ({
    books: books
})
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateProps, mapDispatchToProps)(Content);