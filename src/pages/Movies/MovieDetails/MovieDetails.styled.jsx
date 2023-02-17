import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 5px;
  color: black;

  &.active {
    color: orange;
  }
`;

export const Poster = styled.img`
  width: 200px;
  margin-right: 10px;
`;
export const Container = styled.div`
  display: flex;
`;
