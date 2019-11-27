import React from 'react';

const MovieDetails = ({ selectedMovie }) => {
  if (selectedMovie.length === 0) {
    return (
      <div className='movie-details'>
        <p className='no-movies'>No movie selected</p>
      </div>
    );
  } else {
    return (
      <div className='movie-details'>
        <h2> {selectedMovie.fields.title} </h2>
        <p> {selectedMovie.fields.opening_crawl}</p>
        <p>Directed by: {selectedMovie.fields.director}</p>
      </div>
    );
  }
};

export default MovieDetails;
