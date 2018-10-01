import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
import '../styles/catalog.css'
import Movie from './Movie';
// import MovieDetail from './MovieDetail';
class Catalog extends Component {
    constructor() {
      super();
      this.state = {
        searchWord: ""
      }
    }
    updateSearchText = (e) => {
      console.log(e.target.value);
      this.setState({
        searchWord: e.target.value
      })
    }
   
    render() {
        console.log(this.props.movies);
      return (
        <div>
          <div className="float-right mr-3 form-group col-2">
          <input type="text" id="search" className="form-control text-white search-p" onChange={this.updateSearchText} value= {this.state.searchWord} placeholder="Type movie for search" />
          </div>
          <h1 className="float-center">Catalog</h1>
          <div className="container-of-movies">{this.props.movies.map(item => {
          let link = `/movies/${item.id}`;
          return(<div className="m-w-button" key={item.id}>
          <Movie link={link} changeRentStatus={this.props.changeRentStatus} movie={item} movieId={item.id} movieTitle={item.title} movieImg={item.img}></Movie>
          </div>
          )}
          )}
          </div>
        </div>
      )
    }
  }
  export default Catalog;