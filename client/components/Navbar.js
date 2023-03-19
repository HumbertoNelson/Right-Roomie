import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { teal } from '@mui/material/colors';

const pages = ['Login', 'Signup'];
const settings = ['Account', 'User Information', 'Roommate Preferences', 'Logout'];

function Navbar({ handleClick, isLoggedIn, id }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{background: '#66bb6a'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {isLoggedIn ? (
          <div>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > 
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to='/home'><Typography textAlign="center">Home</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={`users/${id}/account`}><Typography textAlign="center">Account</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={`users/userinfo/${id}`}><Typography textAlign="center">User Information</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to='/home'><Typography textAlign="center">Roommate Preferences</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <a href="#" onClick={handleClick}><Typography textAlign="center">Logout</Typography></a>
                </MenuItem>
              </Menu>
            </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/home"><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button></Link>
              <Link to={`users/${id}/account`}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Account
              </Button></Link>
              <Link to="/updateUserInfo"><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                User Information
              </Button></Link>
              <Link to='/home'><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Roommate Preferences
              </Button></Link>
              <a href="#" onClick={handleClick}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Logout
              </Button></a>
          </Box>
          </div>                     
          ) : (
            <div>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/login"><Typography textAlign="center">Login</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/signup"><Typography textAlign="center">Signup</Typography></Link>
                </MenuItem>
            </Menu>
            </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/login"><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Login
              </Button></Link>
              <Link to="/signup"><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Signup
              </Button></Link>
          </Box>
          </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// const Navbar = ({ handleClick, isLoggedIn, id }) => (
  // <div>
  //   {/* <h1>Right Roomie</h1> */}
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <h1>Right Roomie</h1>
  //         <Link to="/home">Home</Link>
  //         {/* <Link to={`/${id}/userPreference}`}>User Preferences</Link> */}
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //         {/* <Link to="/userInfo">User Info Form</Link> */}
  //         <p>
  //           <Link to={`users/${id}/account`}>Account Information</Link>
  //           <Link to="/updateUserInfo"> Update User Info Form</Link>
  //         </p>
  //       </div>
  //     ) : (
  //       <div>
  //         {/* The navbar will show these links before you log in */}
  //         <Link to="/login">Login</Link>
  //         <Link to="/signup">Sign Up</Link>
  //       </div>
  //     )}
  //   </nav>
  //   <hr />
  // </div>
// );

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    id: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
