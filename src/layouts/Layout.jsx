import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: lemonchiffon;
  width: calc(100vw - 220px);
  height: 100vh;
  margin-left: 200px;
  margin-top: 73px;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <SectionContainer>
        <Outlet />
      </SectionContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
