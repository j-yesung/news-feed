import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from 'redux/modules/login';
import styled from 'styled-components';
import lightIcon from '../assets/dark.svg';
import menuIcon from '../assets/navigation_icon.svg';
import { auth } from '../firebase';
import { darkTheme, lightTheme } from 'styles/theme';
import { setThemeMode } from 'redux/modules/dark';
import { useEffect } from 'react';

const HeaderContainer = styled.header`
  font-family: 'yg-jalnan';
  display: flex;
  width: 100vw;
  background-color: ${({ theme }) => theme.signatureColorTwo};
  padding: 20px;
  font-weight: 600;
  font-size: 25px;
  align-items: center;
  position: fixed;
  z-index: 99;
  justify-content: space-between;
  @media (max-width: 768px) {
  }
  p {
    color: white;
  }
  span {
    color: ${({ theme }) => theme.signatureColorOne};
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;
const UserIcon = styled.img`
  width: 30px;
`;
const DarkMode = styled.img`
  margin-right: 20px;
  width: 30px;
  cursor: pointer;
  filter: ${({ theme }) => theme.invertFilter};
`;

const MenuIcon = styled.img`
  width: 30px;
  display: none;
  margin-left: 20px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const SignUpBtn = styled.button`
  background-color: ${({ theme }) => theme.buttonBgColor};
  border: none;
  padding: 8px 15px;
  font-size: 15px;
  font-weight: bold;
  margin: 0 20px;
  font-family: 'Pretendard-Regular';
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverColor};
  }
`;

const LoginBtn = styled.button`
  background-color: ${({ theme }) => theme.buttonBgColor};
  border: none;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 15px;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverColor};
  }
`;

const LogOutBtn = styled.button`
  background-color: ${({ theme }) => theme.buttonBgColor};
  border: none;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 15px;
  margin-right: 20px;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverColor};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.user.user);
  const themeMode = useSelector(state => state.themeReducer.isMode);

  const logOut = async event => {
    if (auth !== '') {
      await signOut(auth);
      dispatch(setLogout());
      navigate('/');
      alert('로그아웃 되었습니다.');
    } else {
      event.preventDefault();
      alert('현재 로그인이 되어 있지 않습니다.');
    }
  };

  useEffect(() => {
    dispatch(setThemeMode(lightTheme));
  }, [dispatch]);

  const toggleTheme = () => {
    if (themeMode === lightTheme) {
      dispatch(setThemeMode(darkTheme));
    } else {
      dispatch(setThemeMode(lightTheme));
    }
  };

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <p>
            오늘의 <span>나</span>
          </p>
        </Link>
        <Buttons>
          {authUser === null ? (
            <>
              <LoginBtn onClick={() => navigate('/login')}>로그인</LoginBtn>
              <SignUpBtn onClick={() => navigate('/signUp')}>회원가입</SignUpBtn>
            </>
          ) : (
            <LogOutBtn onClick={logOut}>로그아웃</LogOutBtn>
          )}
          {authUser && (
            <>
              <DarkMode src={lightIcon} onClick={toggleTheme} />
              <UserIcon src={authUser.photoURL} />
              <MenuIcon src={menuIcon} />
            </>
          )}
        </Buttons>
      </HeaderContainer>
    </>
  );
};

export default Header;
