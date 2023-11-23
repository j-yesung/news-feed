import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Write from '../pages/Home/Write';
import Content from '../pages/Detail/Content';
import Layout from '../layouts/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/content/:id" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
