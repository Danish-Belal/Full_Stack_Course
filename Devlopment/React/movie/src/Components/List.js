import axios from "axios";
import React, { Component } from "react";

export default class List extends Component {
  constructor() {
    console.log("Constructor is Called");
    super();
    this.state = {
      hover: "",
      movies: [],
      currentPage: 1,
      fav: localStorage.getItem("movies")
        ? JSON.parse(localStorage.getItem("movies")).map(
            (movieObj) => movieObj.id
          )
        : [],
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

  async componentDidMount() {
    console.log("CDM is called");

    // this is through APIs.
    // let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=2");
    // let data = await res.json();

    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=1"
    );
    console.log(data.data);
    this.setState({
      movies: [...data.data.results],
    });
  }

  componentDidUpdate() {
    console.log("CDU is Called");
  }

  async getUpdatedMovies() {
    console.log("getUpdatedMovies is Called");
    let data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=${this.state.currentPage}`
    );
    console.log(data.data);
    this.setState({
      movies: [...data.data.results],
    });
  }

  componentWillUnmount() {
    console.log("Component Will UnMount is Called");
  }

  handlePrevious = () => {
    if (this.state.currentPage > 1) {
      this.setState(
        {
          currentPage: this.state.currentPage - 1,
        },
        this.getUpdatedMovies
      );
    }
  };
  handleNext = () => {
    this.setState(
      {
        currentPage: this.state.currentPage + 1,
      },
      this.getUpdatedMovies
    );
  };

  handleFav = (movieObj) => {
    let favouriteMovies = JSON.parse(localStorage.getItem("movies")) || [];
    if (this.state.fav.includes(movieObj.id)) {
      favouriteMovies = favouriteMovies.filter(
        (movie) => movie.id !== movieObj.id
      );
    } else {
      favouriteMovies.push(movieObj);
    }

    localStorage.setItem("movies", JSON.stringify(favouriteMovies));

    let temp = favouriteMovies.map((movieObj) => movieObj.id);
    this.setState({
      fav: [...temp],
    });
  };

  searchMovie = (e) => {
    console.log(e.title);
  };
  render() {
    console.log("Render is Called");
    console.log("Qwerty", JSON.parse(localStorage.getItem("movies")));
    // let allMovies = movies.results;
    return (
      <>
        {this.state.movies.length === 0 ? (
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="Tranding">
              Trading{" "}
              <input
                placeholder="Serch"
                onChange={(e) => this.searchMovie(e.target.value)}
              ></input>
            </h3>

            <div className="movies-list">
              {this.state.movies.map((movieObj) => {
                return (
                  <div
                    className="card movie-card"
                    onMouseEnter={() => this.handleEnter(movieObj.id)}
                    onMouseLeave={this.handleLeave}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      className="card-img-top movie-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title movie-title">
                        {movieObj.original_title}
                      </h5>

                      <div className="button-wrapper">
                        {this.state.hover == movieObj.id && (
                          <a
                            className="btn btn-primary movie-button"
                            onClick={() => this.handleFav(movieObj)}
                          >
                            {this.state.fav.includes(movieObj.id)
                              ? `Remove from Faviourate`
                              : `Add to Favourite`}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <>
          <nav aria-label="Page navigation example" class="pagination">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" onClick={this.handlePrevious}>
                  {" "}
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link">{this.state.currentPage}</a>
              </li>
              <li class="page-item">
                <a class="page-link" onClick={this.handleNext}>
                  Next{" "}
                </a>
              </li>
            </ul>
          </nav>
        </>
      </>
    );
  }
}
