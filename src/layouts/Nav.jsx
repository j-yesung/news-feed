import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { Dispatch } from 'react';
import { setcategory } from 'redux/modules/navbar';
const NavContainer = styled.nav`
  width: 200px;
  text-align: center;
  position: fixed;
  z-index: 99999;
  height: calc(100vh - 75px);
  margin-top: 75px;
  @media (max-width: 768px) {
    display: ${props => (props.$isVisible ? 'block' : 'none')};
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

const arr = [''];

const Nav = ({ isVisible }) => {
  const navigator = useNavigate();
  const authUser = useSelector(state => state.user.user);

  const dispatch = useDispatch();
  const MenuBarFiltering = category => {
    dispatch(setcategory(category));
  };

  return (
    <NavContainer $isVisible={isVisible}>
      <Menu>
        <MenuBox>
          <Link to="/">
            <li onClick={() => MenuBarFiltering('default')}>메인으로</li>
          </Link>
        </MenuBox>
        <li>
          {/* 첫번째 섹션 */}
          <MenuBox>
            <li onClick={() => MenuBarFiltering('즐거운날')}>즐거운날</li>
            <li onClick={() => MenuBarFiltering('우울한날')}>우울한날</li>
            <li onClick={() => MenuBarFiltering('화가난날')}>화가난날</li>
            <li onClick={() => MenuBarFiltering('행복한날')}>행복한날</li>
          </MenuBox>
          <MenuBox>
            <li onClick={() => MenuBarFiltering('대학생')}>대학생</li>
            <li onClick={() => MenuBarFiltering('직장인')}>직장인</li>
          </MenuBox>
          <MenuBox>
            <li onClick={() => MenuBarFiltering('MBTI-E')}>MBTI-E</li>
            <li onClick={() => MenuBarFiltering('MBTI-I')}>MBTI-I</li>
          </MenuBox>
        </li>

        <li>
          {/* 세번째 섹션 */}
          <MenuBox>
            <li onClick={() => (!authUser ? alert('로그인이 필요합니다.') : navigator('/profile'))}>마이 페이지</li>
            <li>로그아웃</li>
          </MenuBox>
        </li>
      </Menu>
    </NavContainer>
  );
};

export default Nav;
