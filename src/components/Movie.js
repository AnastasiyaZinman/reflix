import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/catalog.css'
class Movie extends Component {
    changeRentStatus = () =>{
      this.props.changeRentStatus(this.props.movie.id);
    }
    render() {
        // console.log("props",this.props.movie);
        const item=this.props.movie;
      return (
        <div>
         <div className="movie-box" id={item.id} key={item.title}>
            <Link to={this.props.link} key={item.id}>
            <img className="img" src={item.img} title={item.title} alt={item.title}/>
            </Link>
            <button type="button" id={item.id} onClick={this.changeRentStatus} 
            className={this.props.btnType}>{this.props.btnText}</button>
            </div>
        </div>
        
      )
    }
  }
  export default Movie;