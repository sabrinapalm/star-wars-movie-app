import React from 'react';

const MoviesList = ({ filteredMovies, showMovieDetails }) => {
  return (
    <>
      <ul className='movie-list'>
        {filteredMovies.map(movie => (
          <li className='movie-list-item' key={movie.id} onClick={() => showMovieDetails(movie.id)}>
            <span className='movie-list-subtitle'>Episode {movie.fields.episode_id}</span>
            <span className='movie-list-title'>{movie.fields.title}</span>
            <span className='movie-list-year'>{movie.fields.release_date}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
