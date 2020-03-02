import React from 'react';
import ImageDefault from '../../src/images/default.jpg';
import styled from 'styled-components';
import moment from 'moment';
const MovieInfo = props => {
  return (
    <InfoWrapper>
      <div className="container-column single">
        <section className="header-movie container-row">
          <h2>{props.currentMovie.title}</h2>
          <span className="date">
            <span className="date">
              {moment(props.currentMovie.release_date).format('DD/MM/YYYY')}
            </span>
          </span>
        </section>

        <section className="details container-row">
          <div className="movie container-column">
            <div className="sinopse">
              <h3>Sinopse</h3>
              <p>{props.currentMovie.overview}</p>
            </div>

            <div className="info">
              <div className="category-and-rate container-row">
                <span className="rate">
                  {props.currentMovie.vote_average * 10}%
                </span>
                <span className="go-back" onClick={props.closeMovieInfo}>
                  <i className="arrow">&#8592;</i>
                  <span style={{ marginLeft: 10 }}>Voltar</span>
                </span>
              </div>
            </div>
          </div>

          <div className="poster">
            {props.currentMovie.poster_path == null ? (
              <img
                src={ImageDefault}
                alt="Poster "
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <img
                src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
                alt="Poster"
                style={{ width: '100%', height: '100%' }}
              />
            )}
          </div>
        </section>
      </div>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  .single {
    background-color: var(--single-background);
    margin: 4em auto;
  }

  .header-movie {
    background-color: #e6e6e6;
    width: 100%;
    justify-content: space-between;
    padding: 1.25em;
  }

  .header-movie h2 {
    color: var(--color-theme);
    font-size: 3em;
    margin-left: 1.6em;
  }

  .header-movie .date {
    font-size: 1.3em;
    font-family: var(--font-Lato);
    font-weight: 300;
    color: var(--accent);
    line-height: 2;
    margin-right: 1.6em;
  }

  .details .movie {
    padding: 0 4em;
  }

  .details .info h3,
  .details .sinopse h3 {
    font-size: 2.4em;
    width: 100%;
    border-bottom: 2px solid var(--secondary);
    color: var(--color-theme);
    margin-bottom: 1em;
    padding-bottom: 5px;
  }

  .details .sinopse p {
    font-size: 1.5em;
    font-family: var(--font-Lato);
    font-weight: 300;
    color: var(--text);
    margin: 1em 0 2em 0;
  }

  .details .categories li {
    display: inline-block;
    padding: 0.5em 0.8em;
    background-color: var(--white);
    border: 1px solid var(--color-theme);
    border-radius: 3em;
    font-size: 1.4em;
    color: var(--color-theme);
    margin: 0 5px;
  }

  .details .category-and-rate {
    justify-content: space-between;
  }

  .details .category-and-rate .rate {
    background-color: var(--color-theme);
    color: var(--secondary);
    font-size: 2.8em;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    border: 4px solid var(--secondary);
    box-shadow: 0 0 0 3px var(--color-theme);
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .details .category-and-rate .go-back {
    cursor: pointer;
    font-size: 2em;
    color: var(--secondary);
  }
`;

export default MovieInfo;
