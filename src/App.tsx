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
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Grid from '@mui/material/Grid/Grid';
import User from './model/User';
import { useAppSelector } from './app/hooks';
import { showActiveUser } from './features/Login/LoginSlice';

const App: React.FC = () => {

  const user: User = useAppSelector(showActiveUser).activeUser;

  return (
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
              <ProtectedRoute hasRole={user.getRole()} outlet={<AddBook />} login={<Login />} />
            } />
            <Route path="/lendbook" element={
              <ProtectedRoute hasRole={user.getRole()} outlet={<LendBook />} login={<Login />} />
            } />
            <Route path="/adminPanel" element={
              <AdminRoute hasRole={user.getRole()} outlet={<AdminPanel />} login={<Login />} />
            } />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;


// todo:
// testy
// rejestr wypożyczeń
// moje książki
// kto ode mnie pożyczył
// dodawanie opinii