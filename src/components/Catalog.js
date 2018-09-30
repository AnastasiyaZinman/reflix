import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/catalog.css'
import Movie from './Movie';
// import MovieDetail from './MovieDetail';
class Catalog extends Component {
    constructor() {
      super();
      this.state = {
      
      }
    }
  
    render() {
        console.log(this.props.movies);
      return (
        <div>
          <h1>Catalog</h1>
          <div className="container-of-movies">{this.props.movies.map(item => {
          let link = `/movies/${item.id}`;
          return(<div className="m-w-button" key={item.id}>
          <Movie link={link} movieId={item.id} movieTitle={item.title} movieImg={item.img}></Movie>
          </div>
          )}
          )}
          </div>
        </div>
      )
    }
  }
  export default Catalog;