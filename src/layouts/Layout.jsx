import Header from './Header';
// import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';


const Section = styled.section`
  background-color: transparent;
  width: calc(100vw - 220px);
  height: 100vh;
  margin-left: 200px;
  margin-top: 73px;

  box-sizing: border-box;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Section>
        <Outlet />
      </Section>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
