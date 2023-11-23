import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  width: 200px;
  text-align: center;
  position: fixed;
  height: calc(100vh - 73px);
  margin-top: 73px;
  @media ${props => props.theme.mobile} {
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
      background-color: #f4eba5;
      cursor: pointer;
      font-weight: bold;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <Menu>
        <MenuBox>
          <Link to="/home">
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
            <Link to="/profile">
              <li>마이 페이지</li>
            </Link>
            <li>로그아웃</li>
          </MenuBox>
        </li>
      </Menu>
    </NavContainer>
  );
};

export default Nav;
