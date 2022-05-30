import React from 'react';
import {  useNavigate } from 'react-router-dom';
import {
    Paper,
    MenuItem,
    Stack,
    MenuList
} from '@mui/material';
import User from '../../model/User';
import { logoutUser } from './../../services/LoginService';


const Menu: React.FC<{ setShowMenu: any, setUser: any, user: User }> = (props) => {

    const navigate = useNavigate();

    const handleMyBookItem = () => {
        navigate("/mybooks");
        props.setShowMenu(false);
    }

    const handleMyAccountItem = () => {
        navigate("/myaccount");
        props.setShowMenu(false);
    }

    const handleLogoutItem = () => {
        logoutUser(props.user);
        props.setUser(new User(0, "", "", "", "","",false))
        navigate("/");
        props.setShowMenu(false);
    }



    return (
        <Stack direction="row" spacing={2}>
            <Paper>
                <MenuList>
                    <MenuItem onClick={handleMyBookItem}>Moje książki</MenuItem>
                    <MenuItem onClick={handleMyAccountItem}>Moje konto</MenuItem>

                    <MenuItem onClick={handleLogoutItem}>Wyloguj</MenuItem>
                </MenuList>
            </Paper>
        </Stack>
    );
}

export default Menu;