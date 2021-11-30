import React from 'react';

const Movie = ({ movies, selectedMovie }) => {
  const movieDetail = movies.find((movie) => movie.title === selectedMovie);
  // console.log(movieDetail);
  return (
    <div>
      <div key={movieDetail.id}>
        <p>{movieDetail.title}</p>
        <p>{movieDetail.year}</p>
        <p>{movieDetail.ratings}</p>
      </div>
    </div>
  );
};

export default Movie;
