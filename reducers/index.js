import { ADD_MEMBER } from "../actions/types";

export const reducer = (state=[], action) => {
    switch(action.type) {
        case ADD_MEMBER:
            return state.concat( action.data )
    }
    return state;
}