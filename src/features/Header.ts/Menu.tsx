import React from 'react';
import {  useNavigate } from 'react-router-dom';
import {
    Paper,
    MenuItem,
    Stack,
    MenuList
} from '@mui/material';
import User from '../../model/User';
import { logoutUser } from '../../services/UserService';


const Menu: React.FC<{ setShowMenu: any, setUser: any, user: User }> = (props) => {

    const navigate = useNavigate();

    const token: string = '';
    const handleMyBookItem = (): void => {
        navigate("/mybooks");
        props.setShowMenu(false);
    }

    const handleMyAccountItem = (): void => {
        navigate("/myaccount");
        props.setShowMenu(false);
    }

    const handleLogoutItem = (): void => {
        logoutUser(props.user, token);
        props.setUser(new User(0, "", "", "", "","",false))
        navigate("/");
        props.setShowMenu(false);
    }

    const handleBookLendItem = (): void => {
        navigate("/lendbook");
        props.setShowMenu(false);
    }



    return (
        <Stack direction="row" spacing={2}>
            <Paper>
                <MenuList>
                    <MenuItem onClick={handleMyBookItem}>Moje książki</MenuItem>
                    <MenuItem onClick={handleBookLendItem}>Wypożycz książkę</MenuItem>
                    <MenuItem onClick={handleMyAccountItem}>Wypożycz książkę</MenuItem>
                    <MenuItem onClick={handleLogoutItem}>Wyloguj</MenuItem>
                </MenuList>
            </Paper>
        </Stack>
    );
}

export default Menu;