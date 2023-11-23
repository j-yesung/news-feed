import styled from 'styled-components';

export const TitleInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 0;
  padding-left: 10px;
  font-size: 20px;
  width: 100%;
  background-color: #eee;
  &::placeholder {
    color: #aaa;
  }
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  outline: none;
  resize: none;
  font-size: 20px;
  background-color: #eee;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  padding-left: 10px;
  margin: 20px 0;
  height: 300px;
  &::placeholder {
    color: #aaa;
  }
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  font-size: 20px;
  background-color: #f4eba5;
  padding: 20px;
  width: 100%;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: #a5c7bb;
  }
`;

export const WriteBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  justify-content: center;
  padding: 100px 100px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px 13px #aaa;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 85px);
  //background-color: bisque;
`;
