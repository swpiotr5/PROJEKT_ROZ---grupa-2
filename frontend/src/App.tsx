import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import Register from "./container/Register";
import DefaultPage from "./components/DefaultPageTemplate/DefaultPage"
import Children from './container/Children';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/defaultpage" element={<DefaultPage />}/>
        <Route path="/children" element={<Children />}/>
      </Routes>
    </>
  );    
}

export default App;
