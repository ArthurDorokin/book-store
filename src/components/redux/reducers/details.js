import {books} from "../../constans";

const initialState = {
    details: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "TAKE_PRODUCT":
             return {
                 ...state,
                 details: books.filter(item => item.id === action.payload)
             }
        default:
            return state;
    }
};
