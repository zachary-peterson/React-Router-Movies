import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const param = useParams();
  const movieId = useParams();

  useEffect(() => {
    const id = param.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    debugger

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          console.log(response);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movie]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => {
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  else if(movieId == movie.id){
  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}}

export default Movie;
