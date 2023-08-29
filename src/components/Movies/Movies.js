import React, { useContext, useEffect, useState } from "react";
import fetchMoviesContext from "../../context/FetchMovies/fetchMoviesContext";
import fetchFavContext from "../../context/FetchFavorites/fetchFavContext";
import "./movies.css";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
    
  const context = useContext(fetchMoviesContext);
  const { movies,loading } = context;

  const favContext = useContext(fetchFavContext);
    const { fav,getFav,addFav,removeFav } = favContext;

  useEffect(()=>{
    getFav()
})
  return (
    <div className="movies">
      {loading ? (
        <div className="movie-list">
          {movies.data.Response==='True'?movies.data.Search.map((ele,id) => {
            return (
              <div className="movie-list-child" key={id}>
                <MovieCard
                  poster={ele.Poster}
                  title={ele.Title}
                  year={ele.Year}
                  id = {ele.imdbID}
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
