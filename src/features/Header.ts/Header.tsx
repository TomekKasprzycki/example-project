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
import User from "./../../model/User";
import { logoutUser } from "./../../services/UserService";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeToken, showCurrentToken } from "../Login/TokenSlice";
import { showActiveUser, removeUseFromState } from "../Login/LoginSlice";


const Header: React.FC = (): JSX.Element => {

  const token: string = useAppSelector(showCurrentToken).currentToken;
  const user: User = useAppSelector(showActiveUser).activeUser;
  const dispach = useAppDispatch();

  useEffect(() => {
    setAuth(user.getId() === 0)
  }, [user])

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
    handleClose();
  }

  const handleMyAccountItem = () => {
    navigate("/myaccount");
    handleClose();
  }

  const handleLogoutButton = () => {
    logoutUser(token).then(res => {
      if (res) {
        dispach(removeUseFromState())
        dispach(removeToken())
      }
    }).then(() => navigate("/"))

      ;
    navigate("/");
    handleClose();
  }

  const handleBookLendItem = (): void => {
    navigate("/lendbook");
    handleClose();
  }

  const handleButtonMainPage = (): void => {
    navigate('/');
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!auth &&
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>}
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
              <MenuItem onClick={handleBookLendItem}>Wypożycz książkę</MenuItem>
              <MenuItem onClick={handleMyAccountItem}>Moje konto</MenuItem>
            </MenuList>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 10 }}>
            <Button type="button" onClick={handleButtonMainPage} sx={{ color: "white", fontSize: 20 }}>
              Sąsiedzka biblioteka
            </Button>
          </Typography>
          {auth ?
            <Button color="inherit" onClick={handleOnClickLoginBtn}>Zaloguj się</Button> :
            <Button color="inherit" onClick={handleLogoutButton}>Wyloguj się</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;