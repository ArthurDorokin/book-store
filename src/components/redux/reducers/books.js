import {books} from "../../constans";

const initialState = {
    books
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};