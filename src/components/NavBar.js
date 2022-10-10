import { AppBar, Box, Button, MenuItem, Menu, Toolbar, Tooltip, Typography, IconButton, Avatar } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext } from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../AppContext'
import AuthGuard from '../guards/AuthGuard';
import { logout } from '../store/actions/users/users.action';
import { deleteToken, getToken } from '../utils/token.service';

function NavBar({logoutAction}) {
  const navigate = useNavigate();
  const { themeMode, setThemeMode } = useContext(AppContext);
  const btnText = themeMode === 'light' ? 'dark' : 'light';
  const displayText = themeMode === 'light' ? 'Dark Mode' : 'Light Mode';

  const pages = [
    { id:1, label: 'Home', path: '/home' }, 
    { id:2, label: 'Blogs', path: '/blogs' },
    { id:3, label: 'Users', path: '/users' },
    { id:4, label: 'Audits', path: '/audits' },
    { id:5, label: 'Contact US', path: '/contact-us' },
    { id:6, label: 'About US', path: '/about' },
    { id:7, label: 'Login', path: '/login' },
    { id:8, label: 'Register', path: '/register' },
  ]
  const settings = ['Profile'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const logout = () =>{
    deleteToken();
    logoutAction();
    navigate('/login');
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Lets Talk
            </Typography>
            
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <AuthGuard key={page.id}>
                  <Button
                  key={page.id}
                  component={Link} to={page.path}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                  </AuthGuard>
                ))}
              </Box>
            

            {getToken() ?
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="../../public/letstalk.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
                <MenuItem key="logout" onClick={() => {logout()}}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
                <MenuItem key="thememodesetting"  onClick={() => { setThemeMode(btnText) }}>
                  <Typography textAlign="center">{displayText}</Typography>
                </MenuItem>
              </Menu>
            </Box> : <></>}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

const mapStateToProps = ({users}) =>{
  return {
    loading: users.loading,
    error: users.error,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    logoutAction: () => dispatch(logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);