import styled from 'styled-components';
import lightIcon from '../assets/dark.svg'; 
import userIcon from '../assets/user.svg';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <HeaderContainer>
        <Link to="/home">
          <p>
            오늘의 <span>나</span>
          </p>
        </Link>
        {/* 이미지는 동적으로 변경해줘야 합니다. */}
        <div>
          <DarkMode src={lightIcon} />
          <UserIcon src={userIcon} />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
