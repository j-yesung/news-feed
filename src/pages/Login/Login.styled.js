import styled from 'styled-components';

export const LoginBox = styled.div`
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  padding: 20px;
  line-height: 2rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 8px #ccc;
  //rem <body> 16px 설정되어있는 폰트사이즈 기준으로
  // 1rem 100% 2rem 200%  em은 부모 태그 기준

  h2 {
    font-size: 1.5rem;
  }
`;
//가로 34% 대략
export const SignUpBtn = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
export const LoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f4eba5 !important;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const FindPwBtn = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
export const PwInput = styled.input`
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
  width: 100%;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 15px;
  &::placeholder {
    color: #ccc;
  }
`;

//이메일 , 비밀번호 텍스트
export const ValidationText = styled.div`
  font-size: 12px;
  opacity: 0.5;
`;

export const BtnBundle = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
`;

export const GithubButton = styled.img`
  width: 30px;
  cursor: pointer;
`;
export const GooglebButton = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const SocialLogin = styled.div`
  display: flex;
  width: 70%;

  justify-content: space-evenly;
  margin: 40px auto 10px;
  // 위 양쪽 아래 // 2개 : 위아래 양쪽
`;
