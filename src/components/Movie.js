import React from 'react';

const Movie = ({ movies, selectedMovie }) => {
  return (
    <div>
      {movies.map((movie) => {
        if (movie.title === selectedMovie) {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <p>{movie.year}</p>
              <p>{movie.ratings}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Movie;
