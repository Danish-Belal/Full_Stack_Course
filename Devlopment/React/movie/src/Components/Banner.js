import React, { Component } from 'react'
import { movies } from './getMovies';

export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    return (
      <div class="card">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} class="card-img-top banner-img" alt="..."/>
          <div class="card-body">
            <h5 class = "card-title banner-title">{movie.original_title}</h5>
            <p class="card-text banner-text">{movie.overview}</p>
          </div>
      </div>


    )
  }
}
