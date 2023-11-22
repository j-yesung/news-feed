import React, { useState,useRef,useCallback } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = () => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twicePw, setTwicePw] = useState('');



  // const ref =useRef("")

  // ref.current = "바꾼값"

  const nameHandler = useCallback((e) => {
    setNickName(e.target.value);
    console.log('nickname',e.target.value);
  },[]);
  const emailHandler = useCallback((e) => {
    setEmail(e.target.value);
    console.log('email',e.target.value);
  },[]);
  const passwordHandler = useCallback((e) => {
    setPassword(e.target.value);
    console.log('password',e.target.value);
  },[]);
  const twicePwHandler = useCallback((e) => {
    setTwicePw(e.target.value);
    
console.log('twicePw',e.target.value);
  },[]);

  const signUp = useCallback(async (event) => {
    event.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: nickname });
      return user;
    } catch (error) {
      // 에러 처리 (예: 에러 메시지 표시)
      console.error('회원가입 중 에러 발생:', error);
    }
  }, [nickname, email, password]);

  return (
    <div>
      
        <p>환영합니다</p>
        <p>오늘의 나와 함께 갓생만들기 시작해요</p>
        <div>
          <input placeholder="닉네임" value={nickname} onChange={nameHandler} />
          <br />
          <input type='email' placeholder="이메일" value={email} onChange={emailHandler} />
          <br />
          <input placeholder="비밀번호" value={password} onChange={passwordHandler} />
          <br />
          <input placeholder="비밀번호재확인" value={twicePw} onChange={twicePwHandler} />
        </div>
        <div>
          <button type="submit" onClick={signUp}>
            회원가입
          </button>
        </div>
   
    </div>
  );
};

export default Signup;
