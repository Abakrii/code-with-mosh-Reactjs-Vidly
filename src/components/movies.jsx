import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from '../common/like';
class Movies extends Component {
  state = {
    movies: getMovies(),
  
  };


  handleDelete = movie =>{
     
      const movies = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({movies})

  }


  handleClickinHeart = movie => {
   
    const movies = [...this.state.movies];

    const index = movies.indexOf(movie);
  

    movies[index] = {...movies[index]};
 
    movies[index].liked = !movies[index].liked;
    
    this.setState({movies});
    
    console.log('4' , movies)


  };
 

  render() {
    const {length: count} = this.state.movies;
    //  const moviesLength = this.state.movies.length;
      if(count === 0 ) 
      return <p>There are No movies in the database</p>
    return (
   <React.Fragment>
       <p>showing {count} in the database</p>
      <table className="table">
          
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie.title}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
             <td> <Like liked={movie.liked} onClick={()=>this.handleClickinHeart(movie)} /></td>
              <td><button onClick ={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default Movies;
