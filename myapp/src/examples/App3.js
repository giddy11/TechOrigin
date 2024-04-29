import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from './Icons/Search.svg'
import MovieCard from "./MovieCard";

//d88aee9e

const API_URL = 'https://www.omdbapi.com/?apikey=d88aee9e';

const movie1 = {
  "Title": "Girl Undefined",
  "Year": "2019",
  "imdbID": "tt11758836",
  "Type": "movie",
  "Poster": "N/A"
}

const App=()=> {
    const [movies, setMovies] = useState([])

    const searchMovies = async (title)=> {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        // console.log(data.Search)
        setMovies(data.Search)
    }
    useEffect(()=> {
        searchMovies('Girl Undefined')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies" value="Superman" 
                    onChange={()=> {}}
                />
                <img 
                    src={SearchIcon} 
                    alt="search" 
                    onChange={()=> {}}/>
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container border-red">
                        <MovieCard movie1={movie1} />
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies yet</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;