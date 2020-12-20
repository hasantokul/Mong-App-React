import * as actionTypes from "../actions/actionTypes"

export default function songsListReducer(state = [],action){
    switch (action.type) {
        case actionTypes.GET_SONGS_SUCCESS:
            
            return action.payload
    
        default:
            return state
    }
}