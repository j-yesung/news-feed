import styled from 'styled-components';

export const ProfileTop = styled.div`
  background-color: lemonchiffon;
  width: 100%;

  margin-left: 20px;
  line-height: 3rem;
`;
export const ProfileName = styled.div`
  background-color: blanchedalmond;
  display: flex;
  justify-content: space-between;
`;

export const ChangeName = styled.button`
  background-color: #f4eba5;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #a5c7bb;
  }
`;

export const SaveBtn = styled.button`
  background-color: #f4eba5;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #a5c7bb;
  }
`;
export const ProfileBox = styled.div`
  background-color: aquamarine;
  display: flex;
  width: 900px;
  margin: 0 auto;
`;

export const MyEmail = styled.p`
  font-size: 1.3rem;
`;

export const NowNickName = styled.p`
  font-size: 1.3rem;
  padding-left: 10px;
`;

export const ChangeInput = styled.input`
  outline: none;
  border: none;
  width: 570px;
  padding: 10px;
  font-size: 1.3rem;
`;
