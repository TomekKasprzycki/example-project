import Login from './features/Login/Login';
import MainPage from './features/MainPage/MainPage';
import Header from './features/Header.ts/Header';
import PageNotFound from './features/PageNotFound/PageNotFound';
import AddBook from './features/AddBook/AddBook';
import Registration from './features/Registration/Registration';
import LendBook from './features/LendingPage/LendBook';
import AdminPanel from './features/AdminPanel/AdminPanel';
import ProtectedRoute from './features/ProtectedRoute/ProtectedRoute';
import AdminRoute from './features/ProtectedRoute/AdminRoutes';
import UserAccounPage from './features/UserAccountPage/UserAccounPage';
import NeedLoginPage from './features/NeedLoginPage/NeedLoginPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import { Grid } from '@mui/material';
import User from './model/User';
import { useAppSelector } from './app/hooks';
import { showActiveUser } from './features/Login/LoginSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const App: React.FC = () => {

  const user: User = useAppSelector(showActiveUser).activeUser;
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if(user.getId() !== 0){
      setAuth(true);
    } else {
      setAuth(false);
    }
  },[user])

  const theme = createTheme({
    palette: {
      primary: {
        light: auth ? '#6fbf73' : '#af52bf' ,
        main: auth ? '#4caf50' : '#9c27b0' ,
        dark: auth? '#357a38' : '#6d1b7b',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff6333',
        main: '#ff3d00',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={10}>
        <Router>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/addbook" element={
                <ProtectedRoute hasRole={user.getRole()} outlet={<AddBook />} login={<NeedLoginPage />} />
              } />
              <Route path="/lendbook" element={
                <ProtectedRoute hasRole={user.getRole()} outlet={<LendBook />} login={<NeedLoginPage />} />
              } />
              <Route path="/useraccount" element={
                <ProtectedRoute hasRole={user.getRole()} outlet={<UserAccounPage />} login={<NeedLoginPage />} />
              } />
              <Route path="/adminPanel" element={
                <AdminRoute hasRole={user.getRole()} outlet={<AdminPanel />} login={<NeedLoginPage />} />
              } />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;


// todo:
// testy
// kto ode mnie pożyczył
// dodawanie opinii