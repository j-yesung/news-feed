import styled from 'styled-components';

export const TitleInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 0;
  padding-left: 10px;
  font-size: 40px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
  &::placeholder {
    color: #aaa;
  }
  border-radius: 10px;
`;
export const SelectedCategory = styled.select`
  padding: 10px 20px;
  width: 200px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  outline: none;
  font-weight: 500;
  margin-bottom: 25px;
  font-family: inherit;

  &::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;
export const SelectedCategory2 = styled.select`
  padding: 10px 20px;
  width: 200px;
  border: none;
  font-size: 20px;
  outline: none;
  font-weight: 500;
  font-family: inherit;
  margin-left: 20px;
  margin-bottom: 25px;
  border-radius: 8px;

  &::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;
export const Textarea = styled.textarea`
  outline: none;
  resize: none;
  font-size: 20px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  padding-left: 10px;
  margin: 20px 0 30px;
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
  background-color: transparent;
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

export const Label = styled.h2`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
