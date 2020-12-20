import { connect } from "react-redux";
import React, { useState } from 'react'
import {  Badge } from 'reactstrap';
import {addMovie} from "../../redux/actions/moviesListActions"
import InputItem from '../tools/InputItem';




function AddMovie({addMovie,history}) {
  const [movie,setMovie] = useState({})
  
  function changeHandler(event){
    const {name,value} = event.target
    setMovie(({
      ...movie,
      [name]:value
    }))
  }

  function saveHandler(event){

    addMovie(movie).then(() =>{
      history.push("/movies")
    })
    event.preventDefault()
  }
  
  return (
    <div style={{marginTop:"6em"}}>
      <Badge style={{padding:"0.5em"}} color = "danger"><h4 style={{color:"white"}}>Add Movie</h4></Badge>
      <br/>
      <br/>
       <form onSubmit = {saveHandler}>
        <InputItem onChange={changeHandler} value = {movie.img} label = "IMG" name ="img" placeholder="Enter Image URL"/>
        <br/>
        <InputItem onChange={changeHandler} value = {movie.name} label="NAME" name="name"  placeholder="Enter Movie Name"/>
        <br/>
        <InputItem onChange={changeHandler} value = {movie.cast} label ="CAST" name ="cast"  placeholder="Enter Cast"/>
        <br/>
        <InputItem onChange={changeHandler} value = {movie.director} label ="DIRECTOR" name ="director"  placeholder="Enter Director"/>
        <br/>
        <InputItem onChange={changeHandler} value = {movie.date} label ="DATE" name ="date"  placeholder="Enter Date"/>
        <br/>
        <InputItem onChange={changeHandler} value = {movie.imdb} label ="IMDB" name ="imdb"  placeholder="Enter IMDB Point"/>
        <br/>
        <button type="submit" className="btn btn-danger">
        Save
        </button>
        </form>
    </div>
  )
}

const mapDispatchToProps = {
  addMovie
}

export default connect(null,mapDispatchToProps)(AddMovie)

