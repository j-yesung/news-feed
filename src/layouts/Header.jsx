import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import lightIcon from '../assets/dark.svg';
import userIcon from '../assets/user.svg';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from 'redux/modules/login';

const HeaderContainer = styled.header`
  font-family: 'yg-jalnan';
  display: flex;
  width: 100vw;
  background-color: #a5c7bb;
  padding: 20px;
  font-weight: 600;
  font-size: 25px;
  align-items: center;
  position: fixed;
  z-index: 99;
  justify-content: space-between;
  @media ${props => props.theme.mobile} {
  }
  p {
    color: white;
  }
  span {
    color: #f4eba5;
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
`;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.user.user);

  const logOut = async event => {
    // auth는 firebase에서 제공해 주는 SDK이므로 로그아웃 시, SDK 내용물을 넣어야 합니다.
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

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <p>
            오늘의 <span>나</span>
          </p>
        </Link>
        <div>
          <DarkMode src={lightIcon} />
          <UserIcon src={userIcon} />
          {authUser === null ? (
            <>
              <button onClick={() => navigate('/login')}>로그인</button>
              <button onClick={() => navigate('/signUp')}>회원가입</button>
            </>
          ) : (
            <button onClick={logOut}>로그아웃</button>
          )}
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
