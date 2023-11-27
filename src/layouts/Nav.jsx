import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setcategory } from 'redux/modules/navbar';
import styled from 'styled-components';

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
  color: ${({ theme }) => theme.contentsTextColor};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.contentsTextColor};
  }
`;

const MenuItem = styled.li`
  padding: 10px 0;
  margin: 10px 0;
  width: 130%;
  border-radius: 10px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0px);
  &:hover {
    background-color: ${({ theme }) => theme.contentsHeaderColor};
    color: ${({ theme }) => theme.buttonTextColor};
    cursor: pointer;
    font-weight: bold;
  }
  ${({ $active, theme }) =>
    $active &&
    `
    background-color: ${theme.contentsHeaderColor};
    font-weight: bold;
    color: ${theme.buttonTextColor};
  `};
`;

const Nav = ({ isVisible }) => {
  const navigator = useNavigate();
  const authUser = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const profilePage = () => {
    !authUser ? alert('로그인이 필요합니다.') : navigator('/profile');
  };
  const handleMenuItemClick = index => {
    setActiveMenuItem(index);
    setIsActive(!isActive);
  };

  const MenuBarFiltering = category => {
    dispatch(setcategory(category));
  };

  return (
    <NavContainer $isVisible={isVisible}>
      <Menu>
        <MenuBox>
          <Link to="/">
            <MenuItem
              $active={activeMenuItem === 0}
              onClick={() => {
                handleMenuItemClick(0);
                MenuBarFiltering('default');
              }}>
              메인으로
            </MenuItem>
          </Link>
        </MenuBox>
        <li>
          <MenuBox>
            <Link to="/">
              <MenuItem
                $active={activeMenuItem === 2}
                onClick={() => {
                  handleMenuItemClick(2);
                  MenuBarFiltering('즐거운날');
                }}>
                즐거운날
              </MenuItem>
              <MenuItem
                $active={activeMenuItem === 3}
                onClick={() => {
                  handleMenuItemClick(3);
                  MenuBarFiltering('우울한날');
                }}>
                우울한날
              </MenuItem>
              <MenuItem
                $active={activeMenuItem === 4}
                onClick={() => {
                  handleMenuItemClick(4);
                  MenuBarFiltering('화가난날');
                }}>
                화가난날
              </MenuItem>
              <MenuItem
                $active={activeMenuItem === 5}
                onClick={() => {
                  handleMenuItemClick(5);
                  MenuBarFiltering('행복한날');
                }}>
                행복한날
              </MenuItem>
            </Link>
          </MenuBox>
        </li>
        <li>
          <MenuBox>
            <Link to="/">
              <MenuItem
                $active={activeMenuItem === 6}
                onClick={() => {
                  handleMenuItemClick(6);
                  MenuBarFiltering('직장인');
                }}>
                직장인
              </MenuItem>
              <MenuItem
                $active={activeMenuItem === 7}
                onClick={() => {
                  handleMenuItemClick(7);
                  MenuBarFiltering('대학생');
                }}>
                대학생
              </MenuItem>
            </Link>
          </MenuBox>
          <MenuBox>
            <Link to="/">
              <MenuItem
                $active={activeMenuItem === 8}
                onClick={() => {
                  handleMenuItemClick(8);
                  MenuBarFiltering('MBTI-E');
                }}>
                MBTI-E
              </MenuItem>
              <MenuItem
                $active={activeMenuItem === 2}
                onClick={() => {
                  handleMenuItemClick(9);
                  MenuBarFiltering('MBTI-I');
                }}>
                MBTI-I
              </MenuItem>
            </Link>
          </MenuBox>
          <MenuBox>
            <MenuItem
              $active={activeMenuItem === 1}
              onClick={() => {
                profilePage();
                handleMenuItemClick(1);
              }}>
              마이 페이지
            </MenuItem>
          </MenuBox>
        </li>
      </Menu>
    </NavContainer>
  );
};
export default Nav;
