import { useState } from "react";
import fetchMoviesContext from "./fetchMoviesContext";
import axios from 'axios'


const FetchMoviesState = (props) =>{

    const [movies, setMovies] = useState({})
    const [loading,setLoading] = useState(false)


    const searchMovie =(searchQuery) =>{
        axios.get(
            `http://www.omdbapi.com/?apikey=a5de3980&s=${searchQuery}`
        )
        .then((response)=>{
            const data = response.data;
            setMovies({ ...movies, data });
            setLoading(true)
        })
        .catch((error)=>{
            console.error("Error fetching data:", error);
        })
    }

    return (
        <fetchMoviesContext.Provider value ={{searchMovie,movies,loading}}>
            {props.children}
        </fetchMoviesContext.Provider>
    )
}

export default FetchMoviesState;