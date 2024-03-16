import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import Register from "./container/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );    
}

export default App;
