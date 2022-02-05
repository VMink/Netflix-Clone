import React, { useState, useEffect } from "react";
import axios from "../requests/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      console.log(movie)
      movieTrailer(movie?.name || "" || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="moviesPosters">
        {movies.map((movie) => {
          if(isLargeRow === true){
            return(
              <img
                key={movie.id}
                className="poster largeRow"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            )
          } else {
            return(
              <img
                key={movie.id}
                className="poster"
                src={`${base_url}${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            )
          }
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};

export default Row;
