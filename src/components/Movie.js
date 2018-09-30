import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/catalog.css'
class Movie extends Component {
    constructor() {
      super();
      this.state = {
      
      }
    }
  
    render() {
        console.log(this.props);
        const item=this.props;
      return (
        <Link to={item.link} key={item.id}>
        <div>
         <div className="movie-box" id={item.id} key={item.title}>
            <img className="img" src={item.movieImg} title={item.movieTitle} alt={item.movieTitle}/>
            <button type="button" className="btn btn-info">Add</button>
            </div>
        </div>
        </Link>
      )
    }
  }
  export default Movie;