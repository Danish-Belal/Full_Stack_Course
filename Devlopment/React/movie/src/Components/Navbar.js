import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div style={{display : "flex" , justifyContent  : "center" , alignitems: "center" , background : "lightblue" , padding: "1rem"}}>
          <Link to={'/'}><h1 >Movies App</h1> </Link>
         <Link to={'/fav'}> <h2 style={{marginLeft : "2rem"}} >Favourites</h2> </Link>
      </div>
    )
  } 
}

