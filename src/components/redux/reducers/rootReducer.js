import {combineReducers} from 'redux'
import books from "./books";
import cart from "./cart";
import details from "./details";
import search from "./search";

export default combineReducers({
    books,
    cart,
    details,
    search
})