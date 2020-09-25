import {books} from "../../constans";

const initialState = {
    books
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return {
                ...state,
                books: books.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) &&
                       books.filter(item => item.author.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default:
            return state;
    }
};