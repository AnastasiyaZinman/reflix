import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/catalog.css'
class Movie extends Component {
    changeRentStatus = () =>{
      this.props.changeRentStatus(this.props.movie);
    }
    render() {
        console.log(this.props);
        const item=this.props;
      return (
        
        <div>
         <div className="movie-box" id={item.id} key={item.title}>
            <Link to={item.link} key={item.id}>
            <img className="img" src={item.movieImg} title={item.movieTitle} alt={item.movieTitle}/>
            </Link>
            <button type="button" onClick={this.changeRentStatus} className="btn btn-info">Add</button>
            </div>
        </div>
        
      )
    }
  }
  export default Movie;