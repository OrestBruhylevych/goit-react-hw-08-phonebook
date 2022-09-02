import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { Box } from 'components/StyledComponent';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function AppBar() {
  const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box as="header" display="flex" justifyContent="space-around">
      <Navigation />

      {!isLoggetIn ? <AuthNav /> : <UserMenu />}
    </Box>
  );
}
