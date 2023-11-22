import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Signup from 'pages/Login/Signup';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
};

export default Router;
