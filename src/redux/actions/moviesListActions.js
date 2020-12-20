import * as actionTypes from "../actions/actionTypes"

export function getMoviesSuccess(movies){
    return {
        type : actionTypes.GET_MOVIES_SUCCESS,
        payload : movies
    }
}



export function addMovieSuccess(movie){
    return {
        type : actionTypes.ADD_MOVIE_SUCCESS,
        payload : movie
    }
}

export function deleteMovie(id){
    return async function(){
        const url = `http://localhost:3000/movies/${id}/`
        await fetch(url,{
            method: 'DELETE'
        })
        
    }
}


export function addMovie(movie){
    return function(dispatch){
        const url = "http://localhost:3000/movies/"
        fetch(url,{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(movie)
        })
        .then(response=> dispatch(addMovieSuccess(response)))
    }
}

export function getMovies(){
    return async function(dispatch){
        const url = "http://localhost:3000/movies"
        const response = await fetch(url)
        const movies = await response.json()
        
        dispatch(getMoviesSuccess(movies))
    }
}