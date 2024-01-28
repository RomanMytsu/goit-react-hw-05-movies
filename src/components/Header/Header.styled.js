import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyles = styled.header`
  background-color: olive;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 18px;
  padding: 24px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  &:hover,
  &:focus {
    color: red;
    text-shadow: -1px -1px 0 hsl(80, 70%, 35%), -2px -2px 1px hsl(80, 70%, 35%);
  }
  &.active {
    color: aqua;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
`;
