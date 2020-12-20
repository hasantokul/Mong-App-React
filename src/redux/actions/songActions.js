import * as actionTypes from "./actionTypes"

export function getSongsSuccess(songs){
    return {
        type: actionTypes.GET_SONGS_SUCCESS,
        payload : songs
    }
}

export function getSongs(){
    return async function(dispatch){
        const url = "http://localhost:3000/songs"
        const response = await fetch(url)
        const songs = await response.json()
        dispatch(getSongsSuccess(songs))
        
    }
}

export function deleteSong(id){
    return async function(){
        const url = `http://localhost:3000/songs/${id}/`
        await fetch(url,{
            method: 'DELETE'
        })
        
    }
}


export function addSong(song){
    return function(){
        const url = "http://localhost:3000/songs/"
        fetch(url,{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(song)
        })
    }
}