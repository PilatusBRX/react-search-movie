import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  return (
    <main className="container-column">
      {props.movies.map(movie => {
        return (
          <Movie
            key={movie.id}
            viewMovieInfo={props.viewMovieInfo}
            movieId={movie.id}
            title={movie.title}
            overview={movie.overview}
            image={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        );
      })}
    </main>
  );
};

export default MovieList;
