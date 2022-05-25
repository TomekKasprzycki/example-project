import Login from './features/Login/Login';
import MainPage from './features/MainPage/MainPage';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </Router>

       
  );
}

export default App;
