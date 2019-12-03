import React, { useState, useEffect } from 'react';

import Container from './containers/Container';

import SearchBar from './components/SearchBar';
import DropDownMenu from './components/DropDownMenu';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import ErrorBox from './components/ErrorBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    let hasLocaleMovies = localStorage.getItem('movies');
    if (hasLocaleMovies) {
      setMovies(JSON.parse(hasLocaleMovies));
      setFilteredMovies(JSON.parse(hasLocaleMovies));
    } else {
      try {
        const url = 'https://star-wars-api.herokuapp.com/films';
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data);
        setFilteredMovies(data);
        localStorage.setItem('movies', JSON.stringify(data));
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
  };

  const showMovieDetails = selected => {
    let movie = movies.find(movie => movie.id === selected);
    setSelectedMovie(movie);
  };

  const searchMovies = searchValue => {
    if (searchValue) {
      let filtered = movies.filter(movie => movie.fields.title.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  const sortMovies = sortType => {
    let sorted;

    if (sortType === 'episode') {
      sorted = [...filteredMovies].sort((a, b) => a.fields.episode_id - b.fields.episode_id);
    }

    if (sortType === 'year') {
      sorted = [...filteredMovies].sort((a, b) => new Date(a.fields.release_date) - new Date(b.fields.release_date));
    }

    if (sortType === 'title') {
      sorted = [...filteredMovies].sort((a, b) => {
        let movieA = a.fields.title.substring(a.fields.title.indexOf('-') + 1).toLowerCase();
        let movieB = b.fields.title.substring(b.fields.title.indexOf('-') + 1).toLowerCase();
        if (movieA < movieB) {
          return -1;
        }
        if (movieA > movieB) {
          return 1;
        }
        return 0;
      });
    }

    setFilteredMovies(sorted);
  };

  return (
    <>
      <Container className={'search-bar-container'}>
        <DropDownMenu sort={sortMovies} />
        <SearchBar search={searchMovies} />
      </Container>
      {error ? (
        <ErrorBox />
      ) : (
        <Container className={'movies-container'}>
          <MoviesList filteredMovies={filteredMovies} showMovieDetails={showMovieDetails} />
          <MovieDetails selectedMovie={selectedMovie} />
        </Container>
      )}
    </>
  );
};

export default App;
