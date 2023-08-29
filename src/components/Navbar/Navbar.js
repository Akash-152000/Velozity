import React,{useContext} from 'react'
import fetchMoviesContext from '../../context/FetchMovies/fetchMoviesContext'
import './navbar.css'

const Navbar = () => {

  const context = useContext(fetchMoviesContext);
  const {searchMovie} = context;

  const handleChange=(e)=>{
    searchMovie(e.target.value)
  }

  return (
    <div className='navbar'>
        <div className="logo"><h3>Velozity Assignment</h3></div>
        <div className="search">
            <input className='search-input' type="text" onChange={handleChange} placeholder='Search your favourite movies...'/>
            {/* <button className='search-button'>Search</button> */}
        </div>
    </div>
  )
}

export default Navbar