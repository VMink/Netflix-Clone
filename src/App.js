import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests/requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" isLargeRow={false} fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" isLargeRow={false} fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" isLargeRow={false} fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" isLargeRow={false} fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" isLargeRow={false} fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" isLargeRow={false} fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" isLargeRow={false} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
