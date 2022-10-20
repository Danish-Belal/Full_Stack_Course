import axios from 'axios';
import React, { Component } from 'react'

export default class List extends Component {
     constructor() {
          console.log("Constructor is Called");
          super();
          this.state = {
               hover: '',
               movies: []
          };
     }

     handleEnter = (id) => {
          this.setState({
               hover: id
          })
     }

     handleLeave = () => {
          this.setState({
               hover: '',
          })
     }

     async componentDidMount() {
          console.log("CDM is called");

          // this is through APIs.
          // let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=2");
          // let data = await res.json();

          let data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=1")
          console.log(data.data);
          this.setState({
               movies: [...data.data.results]
          })

     }

     componentDidUpdate() {
          console.log("CDU is Called");
     }

     componentWillUnmount() {
          console.log("Component Will UnMount is Called");
     }

     render() {
          console.log("Render is Called");
          // let allMovies = movies.results;
          return (
               <>
                    {
                         this.state.movies.length === 0 ? (
                              <div class="spinner-border text-info" role="status">
                                   <span class="visually-hidden">Loading...</span>
                              </div>
                         ) : (
                              <div>
                                   <h3 className='Tranding'>Trading</h3>
                                   <div className='movies-list'>
                                        {this.state.movies.map((movieObj) => {
                                             return (
                                                  <div className="card movie-card" onMouseEnter={() => this.handleEnter(movieObj.id)} onMouseLeave={this.handleLeave}>
                                                       <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..." />
                                                       <div className="card-body">
                                                            <h5 className="card-title movie-title">{movieObj.original_title}</h5>

                                                            <div className='button-wrapper'>
                                                                 {this.state.hover == movieObj.id &&
                                                                      <a href="#" className="btn btn-primary movie-button">Add to Favourites</a>
                                                                 }
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
                    <>
                         <nav aria-label="Page navigation example" class='pagination'>
                              <ul class="pagination">
                                   <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                   <li class="page-item"><a class="page-link" href="#">1</a></li>
                                   <li class="page-item"><a class="page-link" href="#">2</a></li>
                                   <li class="page-item"><a class="page-link" href="#">3</a></li>
                                   <li class="page-item"><a class="page-link" href="#">Next</a></li>
                              </ul>
                         </nav>
                    </>
               </>

          );
     }
}
