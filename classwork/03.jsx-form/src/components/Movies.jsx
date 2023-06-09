import React from "react";
import Movie from "./Movie";
import axios from "axios";
const BASE_URL = "http://localhost:8080/movies";


const Movies = ({movies,setMovies}) => {
 
  const deleteMovie = async (id) => {
   await axios.delete(`${BASE_URL}/${id}`);
    const filtered = movies.filter((movie) => movie.id != id);
    setMovies(filtered);
  };
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movies">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} deleteMovie={deleteMovie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
