import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Home from "./container/Home";
import Login from "./container/Login";
import Register from "./container/Register";
import Children from './container/Children';
import { useEffect, useState } from 'react';


const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
      }
    };

    checkAuth();

    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

return (
  <Router>
    <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Navigate to="/login" />} /> 
        <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/home" />} />
        <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/login" />} />
        <Route path="/children" element={isAuth ? <Children /> : <Navigate to="/login" />} />
    </Routes>
  </Router>
);  
}

export default App;
