import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import Game from './pages/Game';
import Error from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path='/account' element={<Account />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/game' element={<Game />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}
