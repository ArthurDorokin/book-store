import {books} from "../../constans";

const initialState = {
   selectProduct: []
}

export default (state = initialState, action) => {
    console.log('reducers details - ', initialState);
    switch (action.type) {
        case "TAKE_PRODUCT":
             return {
                 ...state,
                 selectProduct: books.filter(item => item.id === action.payload)
             }
        //console.log({selectProduct: books.filter(item => item.id === action.payload)})
        default:
            return state;
    }
};
