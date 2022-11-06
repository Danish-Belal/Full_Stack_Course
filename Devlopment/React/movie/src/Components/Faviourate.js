import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const GENRE_ID = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
export default class Faviourate extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      currentGenre: "All Genre",
      currentText: "",
      limit: 5,
      currPage: 1,
    };
  }

  async componentDidMount() {
    console.log("CDM is called");

    // this is through APIs.
    // let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=2");
    // let data = await res.json();

    // let data = await axios.get(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=04fdb5506bb7fadb96d28abe051de10a&language=en-US&page=1"
    // );

    let data = JSON.parse(localStorage.getItem("movies"));

    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    // console.log(data.data);

    let allGenre = [];
    data.map((movieObj) => {
      if (!allGenre.includes(genreId[movieObj.genre_ids[0]])) {
        allGenre.push(genreId[movieObj.genre_ids[0]]);
      }
    });

    allGenre.unshift("All Genre");
    console.log(allGenre);

    this.setState({
      movies: [...data],
      genre: [...allGenre],
    });
  }

  handleGenre = (e) => {
    let genre = e.target.innerText;
    console.log(genre);
    this.setState({
      currentGenre: genre,
    });
  };

  handletext = (e) => {
    //console.log(e.target.value)
    this.setState({
      currentText: e.target.value,
    });
    console.log(this.state.currentText);
  };

  sortPopAsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objA.popularity - objB.popularity == 0
        ? objA.vote_average - objB.vote_average
        : objA.popularity - objB.popularity;
    });
    this.setState({
      movies: [...allMovies],
    });
  };
  sortPopDsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objB.popularity - objA.popularity == 0
        ? objB.vote_average - objA.vote_average
        : objB.popularity - objA.popularity;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  sortRatAsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objA.vote_average - objB.vote_average;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  sortRatDsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objB.vote_average - objA.vote_average;
    });
    this.setState({
      movies: [...allMovies],
    });
  };
  handleDel = (id) => {
    let newMovies = this.state.movies.filter((movieObj) => {
      return movieObj.id !== id;
    });
    this.setState({
      movies: [...newMovies],
    });
    localStorage.setItem("movies", JSON.stringify(newMovies));
  };
  render() {
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let filterMovies = this.state.movies;
    if (this.state.currentText !== "") {
      filterMovies = filterMovies.filter((movieObj) => {
        let movieName = movieObj.original_title.toLowerCase();
        return movieName.includes(this.state.currentText);
      });
    }
    if (this.state.currentGenre != "All Genre") {
      filterMovies = filterMovies.filter(
        (movieObj) => genreId[movieObj.genre_ids[0]] == this.state.currentGenre
      );
    }
    // else filterMovies = this.state.movies;
    let numOfPages = Math.ceil(filterMovies.length / this.state.limit);
    let pageArr = [];
    for (let i = 1; i <= numOfPages; i++) {
      pageArr.push(i);
    }

    let si = (this.state.currPage - 1) * this.state.limit;
    let ei = si + this.state.limit;
    filterMovies = filterMovies.slice(si, ei);
    return (
      <>
        <div className="row">
          <div className="col-3  p-5 favourites-list">
            <ul class="list-group">
              {this.state.genre.map((genre) => {
                return this.state.currentGenre === genre ? (
                  <li class="list-group-item active">{genre}</li>
                ) : (
                  <li className="list-group-item" onClick={this.handleGenre}>
                    {genre}
                  </li>
                );
              })}
              {/* <li class="list-group-item active">All Genres</li>
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Fantasy</li>
              <li class="list-group-item">Amination</li>
              <li class="list-group-item">Horror</li> */}
            </ul>
          </div>

          <div className="col p-5 favourite-table">
            <div className="row">
              <input
                type="text"
                className="col-8 "
                placeholder="Search"
                value={this.state.currentText}
                onChange={this.handletext}
              ></input>
              <input
                type="number"
                className="col "
                value={this.state.limit}
                onChange={(e) =>
                  this.setState({ limit: Number(e.target.value) })
                }
                placeholder="Result per Page"
              ></input>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">
                    <i class="fa-solid fa-sort-up" onClick={this.sortPopAsc} />
                    Popularity
                    <i
                      class="fa-solid fa-sort-down"
                      onClick={this.sortPopDsc}
                    />
                  </th>
                  <th scope="col">
                    {" "}
                    <i class="fa-solid fa-sort-up" onClick={this.sortRatAsc} />
                    Rating
                    <i
                      class="fa-solid fa-sort-down"
                      onClick={this.sortRatDsc}
                    />
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {filterMovies.map((movieObj) => (
                  <tr>
                    <td>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        style={{ width: "8rem" }}
                      />
                      {movieObj.original_title}
                    </td>
                    <td>{genreId[movieObj.genre_ids[0]]}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{movieObj.vote_average}</td>
                    <td>
                      <button
                        class="btn btn-outline-danger"
                        onClick={() => this.handleDel(movieObj.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation example" className="pagination">
            <ul className="pagination">
              {pageArr.map((pageNum) => {
                return (
                  <li
                    className="page-item"
                    onClick={() => this.setState({ currPage: pageNum })}
                  >
                    <a className="page-link">{pageNum}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
