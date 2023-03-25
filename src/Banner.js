import React, { useEffect, useState } from 'react'
import requests from './requests';
import axios from "./axios";
import "./banner.css";
const Banner = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
       async function fetchData(){
        const request= await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]
        );
        return requests;
    }
    fetchData();
},[]);

function truncate(str,n){
    return str?.length >n ? str.substring(0,n-1)+"..." : str;
}
  return (
<header 
className='banner'
style={{
backgroundSize:"cover",
backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
}}

>
<div className='banner_contents'>
    <h1 className='banner_title'>
        {movie?.name || movie?.title || movie?.original_name}
    </h1>
    <div className='banner_buttons'>
        <button className='banner_button1'>
            <p>play</p>
        </button>
<button className='banner_button2'>
    <p>More Info</p>
</button>
    </div>
    <h1 className='banner_description'>
        {truncate(movie?.overview || movie?.description,150)}
    </h1>
</div>
<div className='banner-fadeBottom'></div>

</header>


  );
}

export default Banner