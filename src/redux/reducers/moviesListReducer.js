import * as actionTypes from "../actions/actionTypes";

export default function moviesListReducer(state=[],action){
    switch (action.type) {
        case actionTypes.GET_MOVIES_SUCCESS:
            
            return action.payload
    
        default:
            return state
    }
}