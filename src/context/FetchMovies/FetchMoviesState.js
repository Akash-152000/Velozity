import { useState } from "react";
import fetchMoviesContext from "./fetchMoviesContext";
import axios from 'axios'


const FetchMoviesState = (props) =>{

    const [movies, setMovies] = useState({})
    const [loading,setLoading] = useState(false)


    const searchMovie = async (searchQuery) =>{
        const response = await axios.post(
            'http://localhost:5001/api/movies/search',
            {
                search: searchQuery
            },
            {
                headers: {
                  "Content-Type": "application/json",
                },
            }
        )
        .then((response)=>{
            const data = response.data;
            setMovies({ ...movies, data });
            setLoading(true)
        })
        .catch((error)=>{
            console.error("Error fetching data:", error.response.data);
        })
    }

    return (
        <fetchMoviesContext.Provider value ={{searchMovie,movies,loading}}>
            {props.children}
        </fetchMoviesContext.Provider>
    )
}

export default FetchMoviesState;