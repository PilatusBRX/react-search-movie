import React from 'react';
import styled from 'styled-components';

const Search = props => {
  return (
    <SearchWrapper>
      <section className="search-section container-column">
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme por nome, ano ou gênero..."
            onChange={props.handleChange}
          />
        </form>
      </section>
    </SearchWrapper>
  );
};
const SearchWrapper = styled.section`
  .search-section form input {
    height: 3em;
    border-radius: 2.5em;
    border: none;
    outline-style: none;
    font-family: inherit;
    color: var(--color-theme);
    background-color: var(--list-background);
    padding-left: 2.4em;
    font-size: 1.6em;
    width: 100%;
  }

  .search-section form input::placeholder {
    color: rgba(17, 97, 147, 0.5);
  }
`;
export default Search;
