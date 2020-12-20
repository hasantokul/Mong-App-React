import {combineReducers} from "redux"
import songsListReducer from "../reducers/songsListReducer"
import moviesListReducer from "../reducers/moviesListReducer"
import getProfileReducer from "../reducers/getProfileReducer"
import favoriteSingerReducer from "./favoriteSingerReducer"
import favoriteActorReducer from "./favoriteActorReducer"

const reducers = combineReducers({
    songsListReducer,
    moviesListReducer,
    getProfileReducer,
    favoriteSingerReducer,
    favoriteActorReducer
})

export default reducers