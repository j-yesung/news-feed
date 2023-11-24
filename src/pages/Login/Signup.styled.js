import styled from 'styled-components';

export const SignUpBox = styled.form`
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 304px;
  transform: translate(-50%, -50%);
  padding: 20px;
  line-height: 2rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 8px #ccc;
  h2 {
    font-size: 1.5rem;
  }
  p {
    margin-bottom: 10px;
  }
`;

export const NameInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
  border: 2px solid #ccc;
  margin-bottom: 10px;
`;
export const EmailInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
  border: 2px solid #ccc;
  margin-bottom: 10px;
`;
export const PasswordInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
  border: 2px solid #ccc;
  margin-bottom: 10px;
`;
export const TwicePwInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
  border: 2px solid #ccc;
  margin-bottom: 10px;
`;

export const SignUpBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f4eba5 !important;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LoginBtn = styled.button`
  border: none;
  background-color: transparent;
  float: right;
  font-weight: bold;
  margin-top: 10px;
`;
