import * as React from 'react';
import styled from '../../styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 0 10px;
  font-size: 26px;
  font-weight: 300;
  text-decoration: none;
  color: inherit;

  svg,
  img {
    max-width: 100%;
  }
`;

const Logo: React.SFC = props => (
  <StyledNavLink to="/">{props.children}</StyledNavLink>
);

export default Logo;
