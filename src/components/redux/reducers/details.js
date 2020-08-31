import books from "../../constans";

const initialState = {
   books
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "TAKE_PRODUCT":
            return {
                ...state,
                selectProduct: state.books.filter(item => item.id === action.id)
            }
        default:
            return state;
    }
};