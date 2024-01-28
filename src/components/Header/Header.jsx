import { HeaderStyles, Nav, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyles>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    </HeaderStyles>
  );
};

export default Header;
