import styled from 'styled-components';

export const TitleInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 0;
  padding-left: 10px;
  font-size: 20px;
  width: 70%;
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  outline: none;
  resize: none;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  padding: 10px 0;
  padding-left: 10px;
  margin: 20px 0;
  height: 300px;
  width: 70%;
`;

export const Button = styled.button`
  border: none;
  font-size: 20px;
  background-color: #f4eba5;
  padding: 10px;
  width: 70%;
  border-radius: 10px;
  &:hover {
    background-color: #eee;
  }
`;

export const WriteBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  justify-content: center;
  padding: 100px 10px;
  background-color: #a5c7bb;
  border-radius: 10px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 85px);
  //background-color: bisque;
`;
