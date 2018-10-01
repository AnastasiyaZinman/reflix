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
   
    generateMovies() {
      return(
      <div className="container-of-movies">{this.props.movies.map(item => {
      let link = `/movies/${item.id}`;
      let buttonType= item.isRented ?  
      {type:"rented-btn-type btn btn-secondary", text:"Rented"} :{type: "add-btn-type btn btn-info", text: "Add"};
      return(<div className="m-w-button" key={item.id}>
      <Movie link={link} 
      changeRentStatus={this.props.changeRentStatus} 
      btnType={buttonType.type}
      btnText={buttonType.text}
      movie={item} >
      </Movie>
      </div>
      )}
      )}
      </div>
      )
    }

    generateRented() {
      let movieList = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchWord));
      let rentedList = movieList.filter(movie => movie.isRented)
      // let rentedList = this.props.movies.filter(movie => movie.isRented)
      return  (<div className="container-of-movies">{rentedList.map(item => {
        let link = `/movies/${item.id}`;
        let buttonType= item.isRented ?  
        {type:"rented-btn-type btn btn-secondary", text:"Rented"} :{type: "add-btn-type btn btn-info", text: "Add"};
        return(<div className="m-w-button" key={item.id}>
       <Movie
        movie={item}
        changeRentStatus={this.props.changeRentStatus} 
        btnType='rented-btn-type btn btn-warning'
        btnText='Return'
        link={link}>
        </Movie>
        </div>
        )}
        )}
        </div>)
    }
    render() {
        console.log(this.props.movies);
      return (
        <div>
          <div className="float-right mr-3 form-group col-2">
          <input type="text" id="search" className="form-control text-black search-p" onChange={this.updateSearchText} value= {this.state.searchWord} placeholder="Type movie for search" />
          </div>
          <h1 className="float-center">Catalog</h1>
          {this.generateMovies()}
        <hr></hr>
        <h1 id="float-center">Rented Movies:</h1>
        {this.generateRented()}
        </div>
        
      )
    }
  }
  export default Catalog;