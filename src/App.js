import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/HomePage';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      budget: 10,
      rentedMovies:[]
      // searchWord: ""
    }
  }
  componentDidMount(){
    (!localStorage.hasOwnProperty("budget")) ? 
    localStorage.setItem("budget", this.state.budget): this.setState({"budget": JSON.parse(localStorage.getItem("budget"))});
    
    (!localStorage.hasOwnProperty("rentedMovies")) ?
    localStorage.setItem("rentedMovies", JSON.stringify(this.state.movies.filter(movie => movie.isRented))):
    this.setState({"rentedMovies": JSON.parse(localStorage.getItem("rentedMovies"))})
    console.log("renteeeedddddd",this.state.rentedMovies);
  }
  componentWillUpdate(){
    localStorage.setItem("budget",this.state.budget);
    localStorage.setItem("rentedMovies",JSON.stringify(this.state.rentedMovies));
  }
  findMovieById = (arrayForSearch,movieId) => {
    var index;
    arrayForSearch.forEach((f,i)=> { 
    // console.log("f",f['id']," i " ,i)
         if (f['id'] == movieId) index=i;
      })
    return index;
  }
  increaseBudgetAndreturnMovie(newState,movieIndex,id){
  newState[movieIndex].isRented=false;
  this.setState({budget:this.state.budget=this.state.budget + 3});
  console.log("id",this.findMovieById(this.state.rentedMovies,id));
  this.state.rentedMovies.splice(this.findMovieById(this.state.rentedMovies,id),1)
 }
 decreaseBudgetAndRentMovie(newState,movieIndex){
   if(this.state.budget>2){
    this.setState({budget:this.state.budget=this.state.budget - 3});
    newState[movieIndex].isRented=true;
    console.log("newstate",newState[movieIndex]);
    this.state.rentedMovies.push(newState[movieIndex]);
   }
   else alert("Not enough money. Firstly, please return books");
  
 }
  changeRentStatus = (id) => { 
    console.log("mIndex",id);
    const movieIndex = this.findMovieById(this.state.movies,id)
    let newState = {...this.state.movies};
    console.log(newState[movieIndex].isRented);
    (newState[movieIndex].isRented) ? 
    this.increaseBudgetAndreturnMovie(newState,movieIndex,id) : 
    this.decreaseBudgetAndRentMovie(newState,movieIndex);
    // console.log("updated array ",this.state)
    console.log("rentedMovies",this.state.rentedMovies);
    this.setState(newState);
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div id="main-links">
          {/* Main Links */}
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <span className="float-right mr-3 text-danger reflix-l "><i className="fas fa-film"> </i>REFLIX</span>
        </div>
        {/* Routes go here */}
        <Route path="/" exact component={Home}/>
        <Route path="/catalog" exact render={() => <Catalog movies={this.state.movies} changeRentStatus={this.changeRentStatus} budget={this.state.budget}/>} />
        <Route path="/movies/:id" exact render={({ match }) => <MovieDetail match= {match} movies={this.state.movies} />} />
        {/* <Route path="/directory/:fentities" exact render={({ match }) => <Fentities match = {match} state={this.state}/>} />
        <Route path="/directory/:fentities/:name" exact render={({ match }) => <Fentity match = {match} state={this.state} />} /> */}
      </div>
      </Router>
    );
  }
}

export default App;
