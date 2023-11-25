import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../assets/user.svg';
import { auth } from '../../firebase';
import * as S from './Signup.styled';

const Signup = () => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [isActive, setIsActive] = useState(false);
  const navigator = useNavigate();

  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const twicePwRef = useRef();

  const checkFormValidity = () => {
    const nickname = nicknameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const twicePw = twicePwRef.current.value;
    setIsActive(nickname !== '' && email !== '' && password !== '' && twicePw !== '');
  };

  const signUp = event => {
    event.preventDefault();
    const nickname = nicknameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const twicePw = twicePwRef.current.value;

    if (nickname === '') {
      return alert('닉네임을 입력해주세요.');
    }

    if (email === '') {
      return alert('이메일을 입력해 주세요.');
    } else if (!emailRegex.test(email)) {
      return alert('이메일형식이 올바르지 않습니다.');
    }

    if (password === '') {
      return alert('비밀번호를 입력해주세요.');
    }

    if (twicePw !== password) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        updateProfile(userCredential.user, { displayName: nickname, photoURL: userIcon })
          .then(() => navigator('/login'))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  return (
    <S.SignUpBox>
      <h2>환영합니다 !</h2>
      <p>오늘의 나와 함께 갓생만들기 시작해요!</p>
      <div>
        <S.NameInput ref={nicknameRef} onBlur={checkFormValidity} placeholder="닉네임" />

        <S.EmailInput ref={emailRef} onBlur={checkFormValidity} type="email" placeholder="이메일" />

        <S.PasswordInput ref={passwordRef} onBlur={checkFormValidity} type="password" placeholder="비밀번호" />

        <S.TwicePwInput ref={twicePwRef} onKeyUp={checkFormValidity} type="password" placeholder="비밀번호 재확인" />
      </div>
      <div>
        <S.SignUpBtn disabled={!isActive} onClick={signUp}>
          회원가입
        </S.SignUpBtn>
        <S.LoginBtn onClick={() => navigator('/login')}>로그인하기</S.LoginBtn>
      </div>
    </S.SignUpBox>
  );
};

export default Signup;
