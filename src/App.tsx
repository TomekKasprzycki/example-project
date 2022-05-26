import Login from './features/Login/Login';
import MainPage from './features/MainPage/MainPage';
import Header from './features/Header.ts/Header';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Grid from '@mui/material/Grid/Grid';

function App() {
  return (
    <Grid container spacing={10}>
      <Router>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Routes>
          <Grid item xs={12}>
            <Route path="/" element={<Login />} />
          </Grid>
          <Grid item xs={12}>
            <Route path='/main' element={<MainPage />} />
          </Grid>
        </Routes>
      </Router>
    </Grid>

  );
}

export default App;
