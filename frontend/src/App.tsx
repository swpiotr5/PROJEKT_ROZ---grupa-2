import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Home from "./container/Home";
import Login from "./container/Login";
import Register from "./container/Register";
import DefaultPage from "./components/DefaultPageTemplate/DefaultPage"
import LandingPage from "./container/LandingPage"
import Children from './container/Children';
import { useEffect, useState } from 'react';


const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
    }
}, []);

return (
  <Router>
    <Routes>
        <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
      <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />} />
      <Route path="/children" element={isAuth ? <Children /> : <Navigate to="/" />} />
    </Routes>
  </Router>
);  
}

export default App;
