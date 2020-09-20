import React, {Component} from "react";
import './Details.css'
import {connect} from "react-redux";

class Details extends Component {
    render() {
        //const {selectProduct} = this.props.selectProduct
        //console.log('selectProduct', selectProduct)

        return (
            <div className="details">
                details
                {/*{selectProduct}*/}

                {/*<div className="book-item" key={selectProduct.id}>*/}
                {/*    <div className="wrap-details">*/}
                {/*        <div className="img-book">*/}
                {/*            <img src={selectProduct.img} alt={selectProduct.alt}/>*/}
                {/*        </div>*/}
                {/*        <div className="info-details">*/}
                {/*            <div className="title">*/}
                {/*                <h3>{selectProduct.title}</h3>*/}
                {/*            </div>*/}
                {/*            <div className="rating-book">*/}
                {/*                Rating:*/}
                {/*                <div className="rating-star">*/}
                {/*                    <div className={`${"rating-span"} ${selectProduct.rating.classRating}`}>*/}
                {/*                        <span></span>*/}
                {/*                        <span></span>*/}
                {/*                        <span></span>*/}
                {/*                        <span></span>*/}
                {/*                        <span></span>*/}
                {/*                    </div>*/}
                {/*                    <div className="quantityStar">{selectProduct.rating.num}/5</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="info-price-control">*/}
                {/*                <div className="price"><strong>{selectProduct.price} uah</strong></div>*/}
                {/*                /!*<div className="counter"></div>*!/*/}
                {/*                <div className="btn-book">*/}
                {/*                    <button>{selectProduct.buy}</button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="list-in-info">*/}
                {/*                <div className="isbn"><strong>ISBN:</strong> {selectProduct.detailedInformation.ISBN}*/}
                {/*                </div>*/}
                {/*                <div className="format">*/}
                {/*                    <strong>Format:</strong> {selectProduct.detailedInformation.format}*/}
                {/*                </div>*/}
                {/*                <div className="numberOfPages"><strong>Number*/}
                {/*                    Pages:</strong> {selectProduct.detailedInformation.numberOfPages}</div>*/}
                {/*                <div className="yearOfPublication"><strong>Year*/}
                {/*                    Publication:</strong> {selectProduct.detailedInformation.yearOfPublication}</div>*/}
                {/*                <div className="publishingHouse"><strong>Publishing*/}
                {/*                    House:</strong> {selectProduct.detailedInformation.publishingHouse}</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="description-book">*/}
                {/*        <h4>Everything about the book</h4>*/}
                {/*        <p>{selectProduct.info}</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}


const mapStateProps = ({selectProduct}) => ({
    selectProduct: selectProduct
})

export default connect(mapStateProps, null)(Details);