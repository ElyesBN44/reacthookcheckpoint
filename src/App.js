import './App.css';
import Navbarr from './Components/Navbar';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import Add from './Components/Add';
import { movies } from './Components/movies';
import { useState } from 'react';
import Moviecard from './Components/Moviecard';

function App() {
  const {movieList, setmovieList}= useState(movies)
  
  const addHandler=(newMovie)=>{
      setmovieList(
      [...movieList, newMovie]
      )
  }
  const{search,setsearch}=useState("");
  const{rate, setrate}=useState("");



    
  return (
  <div className="App">
    <Navbarr/>
    <Filter setsearch={setsearch} setrate={setrate} rate={rate}/>
    <Add addHandler={addHandler}/>
    <MovieList movieList={movieList} search={search} rate={rate}/>
    <Moviecard/>
    </div>
  );
}

export default App;
