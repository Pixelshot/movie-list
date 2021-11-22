import React, { Component } from "react";

class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const URL = "http://localhost:5000/movies";

    fetch(URL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data }))
      .catch((error) => console.log("error:", error));
  }

  render() {
    return (
      <>
        <h1>MovieList</h1>
        <ul>
          {this.state.movies.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default MovieList;
