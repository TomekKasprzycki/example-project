import Login from './features/Login/Login';
import MainPage from './features/MainPage/MainPage';
import Header from './features/Header.ts/Header';
import PageNotFound from './features/PageNotFound/PageNotFound';
import AddBook from './features/AddBook/AddBook';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Grid from '@mui/material/Grid/Grid';
import { useState } from 'react';
import User from './model/User';

const App: React.FC = () => {

  const [user, setUser] = useState(new User(0, "", "", "", ""));

  return (
    <Grid container spacing={10}>
      <Router>
        <Grid item xs={12}>
          <Header setUser={setUser} user={user } />
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path='/' element={<MainPage user={user} />} />
            <Route path="/login" element={<Login setUser={setUser} user={user} />} />
            <Route path="/addbook" element={<AddBook user={user} />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Grid>
      </Router>
    </Grid>

  );
}

export default App;
