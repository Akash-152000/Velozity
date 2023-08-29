import { useState } from "react";
import fetchFavContext from "./fetchFavContext";
import axios from 'axios'


const FetchFavState = (props) =>{
    
    const [fav,setFav] = useState()

    const getFav=async ()=>{
        const response = await axios.get('http://localhost:5001/api/favorites/favmovies')
        .then((response) => {
            // const data = response.json;
            setFav(response.data.favoriteMovies)
          })
        .catch((error)=>{
            console.log(error.response.data);
        })

        
    }


    const addFav = async(id)=>{
        const response = await axios.post('http://localhost:5001/api/favorites/addfav',{
            movieId:id
        })
        .then((response) => {
            // const data = response.json;
            console.log(response);
          })
        .catch((error)=>{
            console.log(error.response.data);
        })

    }

    const removeFav = async(id)=>{
        const response = await axios.delete(`http://localhost:5001/api/favorites/removefav/${id}`)
        .then((response) => {
            // const data = response.json;
            console.log(response);
          })
        .catch((error)=>{
            console.log(error.response.data);
        })

    }



    return (
        <fetchFavContext.Provider value ={{fav,getFav,addFav,removeFav}}>
            {props.children}
        </fetchFavContext.Provider>
    )
}

export default FetchFavState;