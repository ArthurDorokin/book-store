import {books} from "../../constans";

const initialState = {
    books
}

export default (state = initialState, action) => {
    console.log('filter', action);
    switch (action.type) {
        case "TAKE_FILTER":
            return {
                ...state,
                books: action.payload,
            };
        default:
            return state;
    }
};