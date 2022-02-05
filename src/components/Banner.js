import React, { useState, useEffect } from "react";
import axios from "../requests/axios";
import requests from "../requests/requests";
import "./Header.css";
import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"
import N from "../img/N.png"

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
      return request;
    }
    fetchData();
  }, []);

  return (
    <header className="header" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
      <div className="content_container">
        <div className="netflixOriginals">
          <img src={N} alt="Netflix Logo"/>
          <h1>ORIGINALS</h1>
        </div>
        <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <h1 className="description">{movie?.overview}</h1>
        <div className="btns">
          <button className="btn" id="btn1"><FaPlay />Play</button>
          <button className="btn" id="btn2"><AiOutlineInfoCircle />More Information</button>
        </div>
      </div>
      <div className="banner--fadebottom"></div>
    </header>
  );
};

export default Banner;
