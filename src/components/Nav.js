import React from 'react';
import styled from 'styled-components';
const Nav = () => {
  return (
    <NavWrapper>
      <header>
        <h1>Movies</h1>
      </header>
    </NavWrapper>
  );
};
const NavWrapper = styled.header`
  header {
    background-color: var(--color-theme);
    text-align: center;
    height: 8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header h1 {
    color: var(--secondary);
    font-size: 4.8em;
  }
`;

export default Nav;
