import React, { Component } from 'react'
import axios from 'axios';

export default class Banner extends Component {

  constructor(){
    super();
    this.state = {
      movies : []
    }
  }


  async componentDidMount() {
    console.log("CDM is called");
    let data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=1")
    console.log(data.data);
    this.setState({
         movies: [...data.data.results]
    })

}
  render() {
   
    return (
      <>
        {
          this.state.movies.length === 0 ? (
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>)
            : (
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/original/${this.state.movies[0].backdrop_path}`} className="card-img-top banner-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title banner-title">{this.state.movies[0].original_title}</h5>
                  <p className="card-text banner-text">{this.state.movies[0].overview}</p>
                </div>
              </div>
            )}
      </>
    );
  }
}
