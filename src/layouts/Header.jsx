import React from 'react';
import styled from 'styled-components';
import userIcon from '../assets/6138488_person_profile_user_account_group_icon.svg';
import lightIcon from '../assets/7548901_user_interface_sun_sunny_brightness_icon.svg';

const HeaderContainer = styled.header`
  font-family: 'yg-jalnan';
  display: flex;
  width: 100vw;
  background-color: #a5c7bb;
  padding: 20px;
  font-weight: 600;
  font-size: 25px;
  align-items: center;
  justify-content: space-between;
  p {
    color: white;
  }
  span {
    color: #f4eba5;
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
        <p>
          오늘의 <span>나</span>
        </p>
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
