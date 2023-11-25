import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  width: 200px;
  text-align: center;
  position: fixed;
  height: calc(100vh - 73px);
  margin-top: 73px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  li {
    margin: 10px 0;
  }
`;

const MenuBox = styled.ul`
  margin: 20px;
  padding: 3px 10px;
  background-color: #fff;
  border-radius: 10px;

  li {
    //background-color: skyblue;
    padding: 10px 0;
    margin: 10px 0;
    width: 130%;
    border-radius: 10px;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0px);
    &:hover {
      background-color: ${({ theme }) => theme.contentsHeaderColor};
      cursor: pointer;
      font-weight: bold;
      color: ${({ theme }) => theme.buttonTextColor};
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.contentsTextColor};
  }
`;

const Nav = () => {
  const navigator = useNavigate();
  const authUser = useSelector(state => state.user.user);

  const profilePage = () => (!authUser ? alert('로그인이 필요합니다.') : navigator('/profile'));

  return (
    <NavContainer>
      <Menu>
        <MenuBox>
          <Link to="/">
            <li>메인으로</li>
          </Link>
        </MenuBox>
        <li>
          {/* 첫번째 섹션 */}
          <MenuBox>
            <li>1번째 섹션</li>
            <li>2번째 섹션</li>
            <li>3번째 섹션</li>
            <li>4번째 섹션</li>
          </MenuBox>
        </li>
        <li>
          {/* 두번째 섹션 */}
          <MenuBox>
            <li>5번째 섹션</li>
            <li>6번째 섹션</li>
            <li>7번째 섹션</li>
            <li>8번째 섹션</li>
            <li>9번째 섹션</li>
            <li>10번째 섹션</li>
          </MenuBox>
        </li>
        <li>
          {/* 세번째 섹션 */}
          <MenuBox>
            <li onClick={profilePage}>마이 페이지</li>
            <li>로그아웃</li>
          </MenuBox>
        </li>
      </Menu>
    </NavContainer>
  );
};

export default Nav;
