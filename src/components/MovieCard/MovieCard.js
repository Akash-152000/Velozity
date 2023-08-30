import React, { useContext, useEffect } from "react";
import fetchFavContext from "../../context/FetchFavorites/fetchFavContext";
import "./moviecard.css";

const MovieCard = ({ poster, title, year, id }) => {
  const context = useContext(fetchFavContext);
  const { fav, getFav, addFav, removeFav } = context;

  const handleAdd = () => {
    getFav();
    addFav(id)
  };
  const handleRemove = () => {
    getFav();
    removeFav(id)
  };

  return (
    <div className="movie-card">
      <img src={poster} alt={title} width={200} height={300} />
      <div className="movie-details">
        <p>
          <b>{title}</b>
        </p>
        <p>{year}</p>
      </div>

{/* fav is array from context which stores imdbId of the favoorite movies */}
{/* if the Current Id is present in fav array then make icon regular from solid */}

      {fav&&fav.includes(id) ? (
        <div className="heart-icon">
          <i className="fa-solid fa-heart fa-xl" onClick={handleRemove}></i>
        </div>
      ) : (
        <div className="heart-icon">
          <i className="fa-regular fa-heart fa-xl" onClick={handleAdd}></i>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
