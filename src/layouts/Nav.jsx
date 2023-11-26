import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { Dispatch } from 'react';
import { setcategory1, setcategory2 } from 'redux/modules/navbar';
const NavContainer = styled.nav`
  width: 200px;
  background-color: #eee;
  text-align: center;
  position: fixed;
  height: calc(100vh - 75px);
  margin-top: 75px;
  @media (max-width: 768px) {
    display: ${props => (props.$isVisible ? 'block' : 'none')};
  }
`;

const Menu = styled.ul`
  background-color: #eee;
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

const Nav = ({ isVisible }) => {
  const navigator = useNavigate();
  const authUser = useSelector(state => state.user.user);

  const profilePage = () => (!authUser ? alert('로그인이 필요합니다.') : navigator('/profile'));

  console.log(isVisible);

  const dispatch = useDispatch();
  const MenuBarFiltering1 = category => {
    dispatch(setcategory1(category));
  };
  const MenuBarFiltering2 = category => {
    dispatch(setcategory2(category));
  };

  return (
    <NavContainer $isVisible={isVisible}>
      <Menu>
        <MenuBox>
          <Link to="/">
            <li onClick={() => MenuBarFiltering()}>메인으로</li>
          </Link>
        </MenuBox>
        <li>
          {/* 첫번째 섹션 */}
          <MenuBox>
            <li onClick={() => MenuBarFiltering2('대학생')}>대학생</li>
            <li onClick={() => MenuBarFiltering2('직장인')}>직장인</li>
            <li onClick={() => MenuBarFiltering1('음악')}>음악</li>
            <li onClick={() => MenuBarFiltering1('스포츠')}>스포츠</li>
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
            <li onClick={() => (!authUser ? alert('로그인이 필요합니다.') : navigator('/profile'))}>마이 페이지</li>
            <li>로그아웃</li>
          </MenuBox>
        </li>
      </Menu>
    </NavContainer>
  );
};

export default Nav;
