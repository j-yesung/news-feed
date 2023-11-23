import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  background-color: #f4eba5;
  border-radius: 5px;
  float: right;

  margin-top: 20px;

  font-size: 18px;
  &:hover {
    background-color: #a5c7bb;
  }
`;
export const Avatar = styled.img`
  width: 50px;
  margin-left: 10px;
  padding: 10px 0;
`;

export const Title = styled.h2`
  background-color: #f4eba5;
  padding: 13px 0px 13px 20px;
  font-weight: bold;
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Content = styled.p`
  //background-color: yellowgreen;
  padding: 5px 0 10px;
  line-height: 1.8rem;
  font-size: 20px;
  margin: 0px 20px 20px;
  height: 210px;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box; // 얘네를 추가히준다
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const Name = styled.p`
  //background-color: gainsboro;
  padding: 20px 10px;
  font-size: 20px;
  width: calc(100% - 50px);
`;

export const Date = styled.p`
  background-color: #a5c7bb;
  padding: 20px 10px;
  text-align: center;
  font-weight: bold;
  font-size: 23px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ContentsBox = styled.div`
  background-color: #fff;
  width: 300px;
  margin: 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const ContentsList = styled.div`
  display: flex;
  margin-top: 60px;
  width: 1440px;
  flex-wrap: wrap;
  background-color: #eee;
`;

export const AvatarName = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxContainer = styled.div`
  z-index: 999;
  display: flex;
  justify-content: center;
`;
