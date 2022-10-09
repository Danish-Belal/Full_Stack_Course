import React, { Component } from 'react'
import { movies } from './getMovies';

export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    return (
      <>
        {
          movie.length === 0 ? (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>)
            : (
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} class="card-img-top banner-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title banner-title">{movie.original_title}</h5>
                  <p className="card-text banner-text">{movie.overview}</p>
                </div>
              </div>
            )}
      </>
    );
  }
}
