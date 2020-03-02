import React from 'react';
import ImageDefault from '../../src/images/default.jpg';
import styled from 'styled-components';
import moment from 'moment';

const Movie = props => {
  return (
    <MovieWrapper>
      <div
        className="movie container-row"
        onClick={() => props.viewMovieInfo(props.movieId)}
      >
        <div className="poster">
          {props.image === null ? (
            <img
              src={ImageDefault}
              alt="Poster"
              style={{ width: '100', height: 360 }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="Poster"
              style={{ width: '100', height: 360 }}
            />
          )}
        </div>

        <div className="info">
          <div className="info-header">
            <h2>{props.title}</h2>
          </div>
          <div className="info-body">
            <span className="rate">{props.vote_average * 10} %</span>
            <span className="date">
              {moment(props.release_date).format('DD/MM/YYYY')}
            </span>
          </div>

          <div className="info-footer">
            <p>{props.overview}</p>
          </div>
        </div>
      </div>
    </MovieWrapper>
  );
};

const MovieWrapper = styled.div`
  .movie {
    background-color: var(--list-background);
    margin: 1em auto 3em auto;
    cursor: pointer;
  }
  .info-header {
    width: 100%;
    background-color: var(--color-theme);
    padding: 6px;
    font-size: 2.4em;
    color: var(--secondary);
    position: relative;
  }
  .info-header h2 {
    margin-left: 2.6em;
    cursor: pointer;
  }

  .info-body .rate {
    background-color: var(--color-theme);
    color: var(--secondary);
    font-size: 2.4em;
    width: 2.85em;
    height: 2.85em;
    border-radius: 50%;
    border: 4px solid var(--secondary);
    box-shadow: 0 0 0 3px var(--color-theme);
    margin-left: 0.85em;
    text-align: center;
    margin-top: -2em;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info-body {
    margin-bottom: 3em;
  }
  .info-body .date {
    position: relative;
    left: 6.5em;
    top: 0.5em;
    font-size: 1.6em;
    font-family: var(--font-Lato);
    font-weight: 300;
    color: var(--accent);
  }
  .info-footer {
    margin: 2em;
  }
  .info-footer p {
    font-size: 1.6em;
    font-family: var(--font-Lato);
    font-weight: 300;
    color: var(--text);
    margin-bottom: 1em;
  }
  .info-footer .categories li {
    display: inline-block;
    padding: 0.5em 0.8em;
    background-color: var(--white);
    border: 1px solid var(--color-theme);
    margin-left: 0.4em;
    border-radius: 3em;
    font-size: 1.4em;
    color: var(--color-theme);
  }
`;

export default Movie;
