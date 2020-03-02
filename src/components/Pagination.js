import React from 'react';
import styled from 'styled-components';

const Pagination = props => {
  let pageLinks = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? 'active' : '';

    pageLinks.push(
      <li
        className={`item-pagination ${active}`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a href="#!">{i}</a>
      </li>
    );
  }
  return (
    <PaginationWrapper>
      <section className="pagination-section container-row">
        <ul className="pagination">
          {props.currentPage > 1 ? (
            <li
              className="item-pagination"
              onClick={() => props.nextPage(props.currentPage - 1)}
            ></li>
          ) : (
            ''
          )}

          {pageLinks}

          {props.currentPage < props.pages + 1 ? (
            <li
              className="item-pagination"
              onClick={() => props.nextPage(props.currentPage + 1)}
            ></li>
          ) : (
            ''
          )}
        </ul>
      </section>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.section`
  .pagination-section {
    width: 90%;
    max-width: 45em;
    margin: 3em auto;
  }

  .pagination-section .pagination .active {
    margin-left: 1em;
    background-color: var(--color-theme);
    color: var(--secondary);
    font-size: 1.8em;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 3px solid var(--secondary);
    box-shadow: 0 0 0 2px var(--color-theme);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pagination-section .pagination .item-pagination {
    margin-left: 1em;
    font-size: 1.8em;
    width: 2em;
    height: 2em;
    text-align: center;
    display: inline-block;
    line-height: 1.5;
  }

  .pagination .active a {
    color: var(--secondary) !important;
  }

  .pagination .item-pagination a {
    color: var(--color-theme);
  }
`;

export default Pagination;
