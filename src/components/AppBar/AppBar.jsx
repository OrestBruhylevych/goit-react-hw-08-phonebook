import UserMenu from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default function AppBar() {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </nav>
      <UserMenu />
      <Outlet />
    </>
  );
}
