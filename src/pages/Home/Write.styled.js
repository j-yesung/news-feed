import styled from 'styled-components';

export const TitleInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 0;
  padding-left: 10px;
  width: 70%;
`;

export const Textarea = styled.textarea`
  outline: none;
  resize: none;
  border: none;
  padding: 10px 0;
  padding-left: 10px;
  margin: 20px 0;
  width: 70%;
`;

export const Button = styled.button`
  border: none;
  background-color: #f4eba5;
  padding: 10px;
  width: 70%;
  &:hover {
    background-color: #a5c7bb;
  }
`;

export const WriteBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  justify-content: center;
`;
