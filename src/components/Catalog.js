import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/catalog.css'
class Home extends Component {
    constructor() {
      super();
      this.state = {
      
      }
    }
  
    render() {
        console.log(this.props.movies);
      return (
        <div className="container">
          <h1>Catalog</h1>
          <div className="container">{this.props.movies.map(item => {
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
  export default Home;