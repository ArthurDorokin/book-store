import books from "../../constans";

const initialState = {
   books, selectProduct: []
}

export default (state = initialState, action) => {
    console.log(initialState);
    switch (action.type) {
        case "TAKE_PRODUCT":
            return {
                ...state,
                selectProduct: state.books.filter(item => item.id === action.id)
            }
        //console.log({selectProduct: state.books.filter(item => item.id === action.id)})
        default:
            return state;
    }
};
