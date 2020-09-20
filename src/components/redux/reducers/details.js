import {books} from "../../constans";

const initialState = {
   selectProduct: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "TAKE_PRODUCT":
            console.log({selectProduct: books.filter(item => item.id === action.payload)})
             return {
                 ...state,
                 selectProduct: books.filter(item => item.id === action.payload)
             }
        default:
            return state;
    }
};
