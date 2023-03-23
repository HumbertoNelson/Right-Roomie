import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { position } from "@mui/system";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Avatar from '@mui/material/Avatar';

function Navbar({ handleClick, isLoggedIn, id }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    console.log(isLoggedIn.imgUrl),
    <div>
      {Object.keys(isLoggedIn).length > 0 ? (
        <AppBar style={{ background: "#66bb6a" }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Diversity1Icon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="p"
                sx={{
                  mr: 10,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Right Roomie
              </Typography>
              <Box justifyContent="left" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <Avatar alt={isLoggedIn.fullName} src={isLoggedIn.imgUrl} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/home">
                      <Typography textAlign="center">Dashboard</Typography>
                    </Link>
                  </MenuItem>
                  {/* <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={`users/${id}/account`}><Typography textAlign="center">Account</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={`users/userinfo/${id}`}><Typography textAlign="center">User Information</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to='/home'><Typography textAlign="center">Roommate Preferences</Typography></Link>
                </MenuItem> */}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <a href="#" onClick={handleClick}>
                      <Typography textAlign="center">Logout</Typography>
                    </a>
                  </MenuItem>
                </Menu>
              </Box>
              <Diversity1Icon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="p"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Right Roomie
              </Typography>
              <Box
                justifyContent="right"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                <Link to="/home">
                  <Button
                    onClick={handleCloseUserMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Dashboard
                  </Button>
                </Link>
                {/* <Link to={`users/${id}/account`}><Button
                onClick={handleCloseUserMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Account
              </Button></Link>
              <Link to="/updateUserInfo"><Button
                onClick={handleCloseUserMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                User Information
              </Button></Link>
              <Link to='/home'><Button
                onClick={handleCloseUserMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Roommate Preferences
              </Button></Link> */}
                <a href="#" onClick={handleClick}>
                  <Button
                    onClick={handleCloseUserMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Logout
                  </Button>
                </a>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar style={{ background: "#66bb6a" }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Diversity1Icon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="p"
                sx={{
                  mr: 10,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Right Roomie
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/login">
                      <Typography textAlign="center">Login</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/signup">
                      <Typography textAlign="center">Signup</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
              <Diversity1Icon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {" "}
                Right Roomie
              </Typography>
              <Box
                justifyContent="right"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                <Link to="/login">
                  <Button
                    onClick={handleCloseUserMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    onClick={handleCloseUserMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Signup
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </div>
  );
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: state.auth,
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
