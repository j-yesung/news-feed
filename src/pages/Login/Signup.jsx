import React, { useState, useCallback } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = () => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twicePw, setTwicePw] = useState('');
  console.log(nickname);
  // const ref =useRef("")

  // ref.current = "바꾼값"

  const nameHandler = useCallback(e => {
    setNickName(e.target.value);
  }, []);
  const emailHandler = useCallback(e => {
    setEmail(e.target.value);
  }, []);
  const passwordHandler = useCallback(e => {
    setPassword(e.target.value);
  }, []);
  const twicePwHandler = useCallback(e => {
    setTwicePw(e.target.value);
  }, []);

  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: nickname,
    // photoURL: 'https://example.com/jane-q-user/profile.jpg',
  });
  const signUp = useCallback(event => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // 회원가입 성공시

        // .then(() => {
        //   // Profile updated!
        //   // ...
        // })
        // .catch(error => {
        //   // An error occurred
        //   // ...
        // });
        console.log(userCredential);
      })
      .catch(error => {
        // 회원가입 실패시
        console.error(error);
      });
  }, []);

  const user = auth.currentUser;
  console.log('user', user);

  return (
    <div>
      <p>환영합니다</p>
      <p>오늘의 나와 함께 갓생만들기 시작해요</p>
      <div>
        <input placeholder="닉네임" value={nickname} onChange={nameHandler} />
        <br />
        <input placeholder="이메일" value={email} onChange={emailHandler} />
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
