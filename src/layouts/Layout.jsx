import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Nav from './Nav';


const Layout = props => {
  return (
    <>
      {/* 여기다가 Header, Footer, Section 블록처럼 쌓으면 됩니다. */}
      <Header />
      <Nav />
      <Section>{props.children}</Section>
      <Footer />
    </>
  );
};

export default Layout;
