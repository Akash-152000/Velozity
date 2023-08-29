import React, { useContext, useEffect, useState } from "react";
import fetchMoviesContext from "../../context/FetchMovies/fetchMoviesContext";
import "./movies.css";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
    
  const context = useContext(fetchMoviesContext);
  const { movies,loading } = context;


  return (
    <div className="movies">
        {console.log(loading,movies)}
        {console.log("data",movies)}
      {loading ? (
        <div className="movie-list">
          {movies.data.Response==='True'?movies.data.Search.map((ele,id) => {
            return (
              <div className="movie-list-child" key={id}>
                <MovieCard
                  poster={ele.Poster}
                  title={ele.Title}
                  year={ele.Year}
                />
              </div>
            );
          }):<><h1>No results. Check the movie name</h1></>}
        </div>
      ) : (
        <div className="movie-message">
            <h1>Please Search for movies.</h1>
        </div>
      )}
    </div>
  );
};

export default Movies;
