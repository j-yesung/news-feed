import styled from 'styled-components';
export const Avatar = styled.img`
  width: 50px;
`;

export const View = styled.div`
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  padding: 20px;
  font-size: 20px;
  height: calc(100vh - 300px);
  position: relative;

  button {
    padding: 10px 20px;
    border: none;
    margin: 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #f4eba5;
    &:first-of-type {
      right: 100px;
    }
    &:hover {
      background-color: #a5c7bb;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 85px);
  background-color: bisque;
`;

export const Name = styled.p`
  background-color: azure;
  padding: 10px;
  margin-left: 20px;
  font-weight: bold;
`;

export const AvatarName = styled.div`
  display: flex;
  background-color: lemonchiffon;
  align-items: center;
`;
