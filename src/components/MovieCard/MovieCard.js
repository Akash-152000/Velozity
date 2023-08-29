import React from 'react'
import './moviecard.css'

const MovieCard = ({poster,title,year}) => {
  return (
    <div className='movie-card'>
        <img src={poster} alt={title} width={200} height={300} />
        <div className="movie-details">
            <p>{title}</p>
            <p>{year}</p>
        </div>
        <div className='heart-icon'></div>
        
    </div>
  )
}

export default MovieCard