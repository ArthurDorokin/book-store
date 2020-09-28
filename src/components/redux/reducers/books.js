import {books} from "../../constans";

const initialState = {
    books
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return {
                ...state,
                books: books.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        case "SET_FILTER":
            if (action.payload === 0) {
                return {
                    books: books.sort((a, b) => a.id > b.id ? 1 : -1)
                }
            }
            if (action.payload === 1) {
                return {
                    books: books.sort((a, b) => a.rating.num > b.rating.num ? 1 : -1)
                }
            }
            if (action.payload === 2) {
                return {
                    books: books.sort((a, b) => a.priceSumBasket < b.priceSumBasket ? 1 : -1)
                }
            }
            if (action.payload === 3) {
                return {
                    books: books.sort((a, b) => a.priceSumBasket > b.priceSumBasket ? 1 : -1)
                }
            }
            break;
        default:
            return state;
    }
};