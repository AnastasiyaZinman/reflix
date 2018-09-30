import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/movie.css'
class Movie extends Component {
    constructor() {
      super();
      this.state = {
      }
    }
  
    render() {
        console.log(this.props.movies);
        console.log("match",this.props.match.params["id"]);
        const movieId=this.props.match.params["id"];
        const movie = this.props.movies[movieId]
        console.log(movie); 
        let link = `/movies/${movie.id}`;
      return (
        <div className="App">
          
          {/* <Link to={link} key={movie.id}> */}
          <div key={movie.title}> 
          <h1>{movie.title} {movie.year} </h1>
          <div className="movie-box movie">
          <img className="img" src={movie.img} title={movie.title} alt={movie.title}/>
          </div>
         
          <div className="description">{movie.descrShort}</div>
          </div>
          {/* </Link> */}
         
        </div>
      )
    }
  }
  export default Movie;