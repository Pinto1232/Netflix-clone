import './Banner.css'
import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import requests from '../request/Requests'



function Banner()  {

     // Pull the information into the banner
    // create variables
    const [movie, setMovie] = useState([]);


    // Get the useEffect to communicate with banner class
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie)

    //Create a function to truncate the string when is big text
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }


    return (
        <header className="banner" style={{
             backgroundSize: "cover",
             backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
             backgroundPosition: "center center",           
          }}
        >

        <div className="banner__contents">
           <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
               <button className="banner__button">Play</button>
               <button className="banner__button">My List</button>
            </div>
                <h1 className="banner_description">
    
                  {truncate(
                      movie?.overview, 80
                    )}
                </h1>
        </div>

        <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
