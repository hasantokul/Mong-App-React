import * as actionTypes from "../actions/actionTypes"


export default function getProfileReducer(state = [],action){
    switch (action.type) {
        case actionTypes.GET_PROFILE_SUCCESS:
            
            return action.payload;
    
        default:
            return state
    }
}