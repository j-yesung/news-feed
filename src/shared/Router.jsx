import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
