import * as actionTypes from "../actions/actionTypes"


export default function favoriteActorReducer(state=[],action){
    switch (action.type) {
        case actionTypes.GET_FAVORITE_ACTORS_SUCCESS :
            
            return action.payload
    
        default:
            return state
    }
}