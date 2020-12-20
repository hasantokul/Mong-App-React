import { connect } from "react-redux";
import React, { useState } from 'react'
import {  Badge } from 'reactstrap';
import {addSong} from "../../redux/actions/songActions"
import InputItem from '../tools/InputItem';




function AddSong({addSong,history}) {
  const [song,setSong] = useState({})
  
  function changeHandler(event){
    const {name,value} = event.target
    setSong(({
      ...song,
      [name]:value
    }))
  }

  function saveHandler(event){

    addSong(song).then(() =>{
      history.push("/")
    })
    event.preventDefault()
  }
  
  return (
    <div style={{marginTop:"6em"}}>
      <Badge style={{padding:"0.5em"}} color = "dark"><h4 style={{color:"white"}}>Add Song</h4></Badge>
      <br/>
      <br/>
       <form onSubmit = {saveHandler}>
        <InputItem onChange={changeHandler} value = {song.img} label = "IMG" name ="img" placeholder="Enter Image URL" />
        <br/>
        <InputItem onChange={changeHandler} value = {song.name} label="NAME" name="name"  placeholder="Enter Song Name"/>
        <br/>
        <InputItem onChange={changeHandler} value = {song.singer} label ="SINGER/GROUP" name ="singer"  placeholder="Enter Singer/Group"/>
        <br/>
        <InputItem onChange={changeHandler} value = {song.album} label ="ALBUM" name ="album"  placeholder="Enter Album"/>
        <br/>
        <InputItem onChange={changeHandler} value = {song.date} label ="DATE" name ="date"  placeholder="Enter Date"/>
        <br/>
        <InputItem onChange={changeHandler} value = {song.views} label ="VIEWS" name ="views"  placeholder="Enter Views on Youtube"/>
        <br/>
        <button type="submit" className="btn btn-danger">
        Save
        </button>
        </form>
    </div>
  )
}

const mapDispatchToProps = {
  addSong
}

export default connect(null,mapDispatchToProps)(AddSong)

