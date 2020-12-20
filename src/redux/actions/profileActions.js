import * as actionTypes from "../actions/actionTypes"


export function getProfileSuccess(profile){
    return {
        type : actionTypes.GET_PROFILE_SUCCESS,
        payload: profile
    }
}



export function editProfile(profile){
    return async function(){
        const url = "http://localhost:3000/profile/"
        await fetch(url,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(profile)
        
        })
    }
}

export function getProfile(){
    return async function(dispatch){
        const url = "http://localhost:3000/profile"
        const response = await fetch(url);
        const data = await response.json();
        dispatch(getProfileSuccess(data))

    }
}