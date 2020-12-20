import {Badge, Table,Button} from "reactstrap"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getMovies,deleteMovie} from "../../redux/actions/moviesListActions"
import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Movies extends Component {

    state = {
        searchedMovie : null
    }

    componentDidMount(){
        
        this.props.actions.getMovies()
      }
    
    deleteOperation(movie){
        this.props.actions.deleteMovie(movie.id)
        window.location.reload()
    }
    
    render() {
          
        return (
            <div style={{overflowX:"auto"}}>
                <br></br>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h4 style = {{color:"white"}}>Movies List </h4><br></br>
            <Link to="add_movie"><a class = "btn btn-danger">+ Add New</a></Link> 
            </div>
            
            
            <form className="form-inline my-2 my-lg-0">
            <Badge style ={{height:"3em"}} color = "dark"><h4>Search</h4></Badge>
            <input onChange={e => this.setState({searchedMovie:e.target.value})} value = {this.searchedMovie} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            
            </form>

            <Table dark>
            <thead>
                <tr>
                    <th>Movie</th>
                    <th>Name</th>
                    <th>Actors&Actresses</th>
                    <th>Director</th>
                    <th>Date</th>
                    <th>IMDB</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody >

                {   
                    this.props.movies.filter(movie =>{
                        if(this.state.searchedMovie === null){
                            return movie
                        }
                        else if(movie.name.toLowerCase().includes(this.state.searchedMovie.toLowerCase())){
                            return movie
                        }
                    }).map(movie => (
                         
                        
                    <tr>
                    
                    <td><img width = "75%" height = "auto" src = {movie.img}></img></td>
                    <td>{movie.name}</td>
                    <td>{movie.cast}</td>
                    <td>{movie.director}</td>
                    <td>{movie.date}</td>
                    <td>{movie.imdb}</td>
                    <td><Button onClick={()=> this.deleteOperation(movie)} color="danger">Delete</Button></td>
                
                    </tr>
                    ))
                }
            </tbody>
            </Table>
            </div>
        )
    }
}

export function mapDispatchToProps(dispatch){
    return {
        actions : {
            getMovies : bindActionCreators(getMovies,dispatch),
            deleteMovie : bindActionCreators(deleteMovie,dispatch)
        }
        }
    }
  

function mapStateToProps(state){
    return {
        movies : state.moviesListReducer
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Movies)
