import React from 'react';
import { useRouteMatch, useParams, Link } from 'react-router-dom';



const MovieList = props => { 

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
} 

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  
  return (
    
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <Link to={`/movies/${movie.id}`}>Details</Link>
    </div>
  );
}

export default MovieList;
