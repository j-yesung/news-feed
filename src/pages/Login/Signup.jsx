import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import userIcon from '../../assets/user.svg';

const Signup = () => {
  const [isActive, setIsActive] = useState(false);
  const navigator = useNavigate();
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const twicePwRef = useRef();

  const checkFormValidity = () => {
    const nickname = nicknameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const twicePw = twicePwRef.current.value;

    const isNicknameValid = nickname !== '';
    const isEmailValid = pattern.test(email);
    const isPasswordValid = password !== '';
    const isTwicePwValid = twicePw !== '' && password === twicePw;

    setIsActive(isNicknameValid && isEmailValid && isPasswordValid && isTwicePwValid);
  };

  const signUp = () => {
    const nickname = nicknameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (pattern.test(email) === false) return alert('이메일형식이 올바르지 않습니다.');

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        updateProfile(userCredential.user, { displayName: nickname, photoURL: userIcon })
          .then(() => navigator('/login'))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  return (
    <form>
      <p>환영합니다</p>
      <p>오늘의 나와 함께 갓생만들기 시작해요</p>
      <div>
        <input ref={nicknameRef} onKeyUp={checkFormValidity} placeholder="닉네임" />
        <br />
        <input ref={emailRef} onKeyUp={checkFormValidity} type="email" placeholder="이메일" />
        <br />
        <input ref={passwordRef} onKeyUp={checkFormValidity} type="password" placeholder="비밀번호" />
        <br />
        <input ref={twicePwRef} onKeyUp={checkFormValidity} type="password" placeholder="비밀번호 재확인" />
      </div>
      <div>
        <button disabled={!isActive} onClick={signUp}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default Signup;
