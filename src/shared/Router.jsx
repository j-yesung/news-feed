import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Write from '../pages/Home/Write';
import Layout from '../layouts/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
