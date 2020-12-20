import React, { useState } from 'react'
import {addFavoriteSinger} from "../../redux/actions/favoritesActions"
import { connect } from "react-redux";

function AddSinger({addFavoriteSinger,history}) {


    const [singer,setSinger] = useState({})

    const changeHandler = (e) =>{
        const {name,value} = e.target
        setSinger(({
            ...singer,
            [name]:value
        }))
    }

    const submitHandler = (e) =>{
        addFavoriteSinger(singer).then(() =>{
            history.push("/")
          })
          e.preventDefault()
    }

    return (
        <div style={{marginTop:"4em"}}>
        <h3 style={{color:"white"}}>Add Favorite Singer/Group</h3>
        <form onSubmit={submitHandler} style={{marginTop:"2em"}}>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Singer/Group Image URL</strong> </label>
            <input onChange={changeHandler} name="img" type="text" class="form-control" placeholder="Enter Singer/Group Image URL"/>
            
        </div>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Singer/Group Name</strong> </label>
            <input onChange={changeHandler} name="name" type="text" class="form-control" placeholder="Enter Singer/Group Name"/>
            
        </div>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Singer/Group - Age/Union Date</strong> </label>
            <input onChange={changeHandler} name="age" type="text" class="form-control" placeholder="Enter Singer/Group - Age/Union Date"/>
            
        </div>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Singer/Group Home Town</strong> </label>
            <input onChange={changeHandler} name="location" type="text" class="form-control" placeholder="Enter Singer Hometown"/>
            
        </div>
        
        
        <button type="submit" class="btn btn-danger">Save</button>
        </form>
    </div>
    )
}
const mapDispatchToProps = {
    addFavoriteSinger
}

export default connect(null,mapDispatchToProps)(AddSinger)