import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [],
    selectedMovie: null,
  };

  async componentDidMount() {
    try {
      const URL = 'http://localhost:5000/movies';

      const response = await fetch(URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      // console.log(data);
      this.setState({ movies: data });
    } catch (error) {
      console.log('error: ', error);
    }
  }
  // componentDidMount() {
  //   const URL = 'http://localhost:5000/movies';

  //   fetch(URL, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ movies: data }))
  //     .catch((error) => console.log('error:', error));
  // }

  getTitle = (title) => {
    this.setState({
      selectedMovie: title,
    });
  };

  render() {
    const { movies, selectedMovie } = this.state;
    return (
      <>
        <div>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <div>{movie.title}</div>
                <button onClick={() => this.getTitle(movie.title)}>
                  Select
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {selectedMovie === null ? (
            <h1>Select a title</h1>
          ) : (
            <Movie selectedMovie={selectedMovie} movies={movies} />
          )}
        </div>
      </>
    );
  }
}

export default MovieList;
