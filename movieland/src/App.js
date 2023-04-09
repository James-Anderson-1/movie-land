import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// 6a24a75a

const API_URL = "https://www.omdbapi.com?apikey=6a24a75a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    // ----------------------- Major Returns Section ---------------------
    <div className="app">
      <h1>Ez Movie Index</h1>

      <h3>Enter a keyword and press 🔍</h3>
        <h5>---</h5>
            <h5>Powered by OMDB API</h5>
                <h5>---</h5>
        <h5>Designed and Deployed by </h5>

        <h5> James D. Anderson</h5>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="container">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
