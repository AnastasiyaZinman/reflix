import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/home.css'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        // { name:"Maria", color: "red", imgUrl:"https://goo.gl/DwwYE2"},
        { name:"Fred", color: "lightblue", imgUrl:"https://goo.gl/4MP56C"},
        { name:"Talli", color: "purple", imgUrl:"https://goo.gl/deoGyq"},
        { name:"Mihael", color: "lightgreen", imgUrl:"https://goo.gl/nLcZA9"},
        { name:"Florance", color: "lightpink", imgUrl:"https://goo.gl/NcZVKQ"}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Who's watching?</h1>
        <div className="container">{this.state.users.map(item => 
        <Link to="/catalog">
        <div style={{backgroundColor:item.color}}  className="userBox rounded" key={item.name}>
        {item.name}<br />
        <img className="img" src={item.imgUrl} alt=""/>
        </div>
        </Link>
        )}
        </div>
      </div>
    )
  }
}
export default Home;