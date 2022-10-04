import React, { Component } from 'react'
import { movies } from './getMovies'

export default class List extends Component {
     render() {
          let allMovies = movies.results;
          return (
               <div>
                    <h3 className='Tranding'>Trading</h3>
                    <div className='movies-list'>
                         {allMovies.map((movieObj) => {
                              return (
                                   <div class="card movie-card">
                                        <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} class="card-img-top movie-img" alt="..." />
                                        <div class="card-body">
                                             <h5 class="card-title movie-title">{movieObj.original_title}</h5>
                                             <div className='button-wrapper'>
                                                  <a href="#" class="btn btn-primary movie-button">Add to Favourites</a>
                                             </div>
                                        </div>
                                   </div>

                              )
                         }

                         )}
                    </div>
               </div>
          )
     }
}
