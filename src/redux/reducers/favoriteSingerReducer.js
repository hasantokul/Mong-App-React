import * as actionTypes from "../actions/actionTypes"

export default function favoriteSingerReducer(state=[],action){
    switch (action.type) {
        case actionTypes.GET_FAVORITE_SINGERS_SUCCESS :
            
            return action.payload
    
        default:
            return state
    }
}

