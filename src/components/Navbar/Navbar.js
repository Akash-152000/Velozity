import React,{useCallback, useContext} from 'react'
import fetchMoviesContext from '../../context/FetchMovies/fetchMoviesContext'
import './navbar.css'

const Navbar = () => {

  const context = useContext(fetchMoviesContext);
  const {searchMovie} = context;


  const debounce = (func) =>{
    let timer;
    return function(...args){
      const context = this;
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        timer=null
        func.apply(context,args)
      },300)
    }
  }

  const handleChange=(e)=>{
    searchMovie(e.target.value)
  }

  const optimisedVersion = useCallback(debounce(handleChange,[]))

  return (
    <div className='navbar'>
        <div className="logo"><h3>Velozity Assignment</h3></div>
        <div className="search">
            <input className='search-input' type="text" onChange={optimisedVersion} placeholder='Search your favourite movies...'/>
        </div>
    </div>
  )
}

export default Navbar