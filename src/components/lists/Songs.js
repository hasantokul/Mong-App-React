import React, { Component } from 'react'
import {Table,Badge,Button} from "reactstrap"
import {connect} from "react-redux"
import {getSongs,deleteSong} from "../../redux/actions/songActions"
import {bindActionCreators} from "redux"
import {Link} from "react-router-dom"


class Songs extends Component {

    state = {
        searchedSong:null
    }

    componentDidMount(){
        
        this.props.actions.getSongs()
      }
    
    deleteOperation(song){
        this.props.actions.deleteSong(song.id)
        window.location.reload()
    }

    render() {
        return (
            <div style={{ overflowX:"auto"}}>
            <br></br>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h4 style = {{color:"white"}}>Songs List </h4><br></br>
            <Link to="add_song"><a class = "btn btn-danger">+ Add New</a></Link> 
            </div>
            <form className="form-inline my-2 my-lg-0">
            <Badge style ={{width:"7em", height:"3em"}} color = "dark"><h4>Search</h4></Badge>
            <input onChange={e => this.setState({searchedSong:e.target.value})} value = {this.searchedSong} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            
            </form>

            <Table  dark>
            <thead>
                <tr>
                    <th>Song</th>
                    <th>Name</th>
                    <th>Singer</th>
                    <th>Album</th>
                    <th>Date</th>
                    <th>Youtube Views</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody >

                {
                       
                    this.props.songs.filter(song =>{
                        if(this.state.searchedSong === null){
                            return song
                        }
                        else if(song.name.toLowerCase().includes(this.state.searchedSong.toLowerCase())){
                            return song
                        }
                    }).map(song => (
                    <tr>
                    
                    <td><img width = "75%" height = "auto" src = {song.img}></img></td>
                    <td>{song.name}</td>
                    <td>{song.singer}</td>
                    <td>{song.album}</td>
                    <td>{song.date}</td>
                    <td>{song.views}</td>
                    <td><Button onClick={()=>this.deleteOperation(song)} color="danger">Delete</Button></td>
                    
                    </tr>
                    ))
                }
            </tbody>
            </Table>
            </div>
        )
    }
}

export function mapStateToProps(state){
    return {
        songs : state.songsListReducer
    }
}

export function mapDispatchToProps(dispatch){
    return {
        actions : {
            getSongs : bindActionCreators(getSongs,dispatch),
            deleteSong : bindActionCreators(deleteSong,dispatch)
        }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Songs)