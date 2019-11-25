import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    try {
      const res = await fetch('https://star-wars-api.herokuapp.com/films');
      const data = await res.json();
      setMovies(data);
      setFilteredMovies(data);
    } catch (err) {
      setError(true);
    }
  };

  return <div className="App"></div>;
}

export default App;
