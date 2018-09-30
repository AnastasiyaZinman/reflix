import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/catalog.css'
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
          return(<Link to={link} key={item.id}>
          <div className="movie-box" id={item.id} key={item.title}>
          <img className="img" src={item.img} alt=""/>
          </div>
          </Link>
          )}
          )}
          </div>
        </div>
      )
    }
  }
  export default Catalog;