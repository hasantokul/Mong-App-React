import * as actionTypes from "./actionTypes"


export function getFavoriteSingersSuccess(singers){
    return {
        type:actionTypes.GET_FAVORITE_SINGERS_SUCCESS,
        payload:singers
    }
}

export function getFavoriteSingers(){
    return async function(dispatch){
        const url = "http://localhost:3000/singers"
        const response =  await fetch(url)
        const singers = await response.json()
        dispatch(getFavoriteSingersSuccess(singers))

    }
}

export function addFavoriteSinger(singer){
    return async function(){
        const url = "http://localhost:3000/singers"
        await fetch(url,{
            method:"POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(singer)
        })
    }
}

export function deleteFavoriteSinger(id){
    return async function(){
        const url = `http://localhost:3000/singers/${id}`
        await fetch(url,{
            method:"DELETE"
        })
    }
}


export function getFavoriteActorsSuccess(actors){
    return {
        type:actionTypes.GET_FAVORITE_ACTORS_SUCCESS,
        payload:actors
    }
}

export function getFavoriteActors(){
    return async function(dispatch){
        const url = "http://localhost:3000/actors"
        const response =  await fetch(url)
        const actors = await response.json()
        dispatch(getFavoriteActorsSuccess(actors))

    }
}
export function addFavoriteActor(actor){
    return async function(){
        const url = "http://localhost:3000/actors"
        await fetch(url,{
            method:"POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(actor)
        })
    }
}

export function deleteFavoriteActor(id){
    return async function(){
        const url = `http://localhost:3000/actors/${id}`
        await fetch(url,{
            method:"DELETE"
        })
    }
}