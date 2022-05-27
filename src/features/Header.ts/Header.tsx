import React, { useEffect } from "react";
import {
  IconButton,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Menu,
  MenuList
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import User from "../../model/User";
import { useNavigate } from "react-router-dom";
import { logoutUser } from './../../services/LoginService';


const Header: React.FC<{ setUser: any, user: User }> = (props): JSX.Element => {

  useEffect(() => {
    setAuth(props.user.getId() === 0)
  }, [props.user])

  const navigate = useNavigate();

  const handleOnClickLoginBtn = (): void => {
    navigate('/login')
  }

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);



  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddBookItem = () => {
    navigate("/addbook");
  }

  const handleMyAccountItem = () => {
    navigate("/myaccount");
  }

  const handleLogoutItem = () => {
    logoutUser(props.user);
    props.setUser(new User(0, "", "", "", ""))
    navigate("/");
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuList>
                  <MenuItem onClick={handleAddBookItem}>Dodaj książkę</MenuItem>
                  <MenuItem onClick={handleMyAccountItem}>Moje konto</MenuItem>
                  <MenuItem onClick={handleLogoutItem}>Wyloguj</MenuItem>
                </MenuList>
              </Menu>
            </div>)}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 10 }}>
            Sąsiedzka biblioteka
          </Typography>
          {props.user.getLogin() === '' && <Button color="inherit" onClick={handleOnClickLoginBtn}>Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;