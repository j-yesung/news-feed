import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Write from '../pages/Home/Write';
import Content from '../pages/Detail/Content';
import Layout from '../layouts/Layout';
import Login from 'pages/Login/Login';
import Profile from 'pages/User/Profile';
import Signup from 'pages/Login/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/content/:id" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
