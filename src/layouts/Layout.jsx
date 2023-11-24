import Header from './Header';
// import Footer from './Footer';
import UpDown from 'components/Button/UpDown';
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
  @media ${props => props.theme.mobile} {
    margin-left: 0px;
    margin-top: 0;
    width: 100vw;
  }
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Section>
        <Outlet />
      </Section>
      <UpDown />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
