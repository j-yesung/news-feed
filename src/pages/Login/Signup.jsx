import React, { useState, useCallback } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
// import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twicePw, setTwicePw] = useState('');
  console.log(nickname);

  // const dispatch = useDispatch();
  // const data = useSelector((state)=> state);
  // console.log('유저셀렉터',data);

  // const ref =useRef("")

  // ref.current = "바꾼값"

  const nameHandler = useCallback(e => {
    setNickName(e.target.value);
    console.log(e.target.value);
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

  const signUp = useCallback(
    event => {
      event.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // 회원가입 성공시
          console.log(' 회원가입 성공', userCredential);

          // 사용자 프로필 업데이트
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nickname,
            // photoURL: 'https://example.com/jane-q-user/profile.jpg',
          })
            .then(() => {
              console.log('프로필 업데이트 성공!', user);
              // 프로필 업데이트 성공 !
              // 필요한 경우 여기에 추가 로직을 수행합니다.
            })
            .catch(error => {
              // 프로필 업데이트 중 오류 발생
              console.error(error);
            });
        })
        .catch(error => {
          // 회원가입 실패시
          console.error(error);
        });
    },
    [nickname, email, password],
  );

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
