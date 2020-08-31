import books from "../../constans";

const initialState = {
    books
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                ...state,
                books: action.payload,
            };
        default:
            return state;
    }
};