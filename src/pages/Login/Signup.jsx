import React, { useState, useCallback, useRef } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addName, addEmail, addPw, addTpw } from 'redux/modules/signup';

const Signup = () => {
  // const [nickname, setNickName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [twicePw, setTwicePw] = useState('');
  // console.log(nickname);






  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const dispatch = useDispatch();
  const nickname = useSelector(state => state.signup.nickname);
  const email = useSelector(state => state.signup.email);
  const password = useSelector(state => state.signup.password);
  const twicePw = useSelector(state => state.signup.tPassword);
  const data = useSelector(state => state.signup);
  // console.log('유저셀렉터', data);

  // const ref =useRef("") ref는 변경되면 렌더링이 안된다는걸 다시 한번 기억
  const nicknameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const twicePwRef = useRef(null);
  // ref.current = "바꾼값"
  console.log('ref', nicknameRef);

  const nameHandler = e => {
    dispatch(addName(e.target.value));
    // console.log(e.target.value);
  };
  const emailHandler = e => {
    dispatch(addEmail(e.target.value));
  };
  const passwordHandler = e => {
    dispatch(addPw(e.target.value));
  };
  const twicePwHandler = e => {
    dispatch(addTpw(e.target.value));
  };

  const signUp = useCallback(
    event => {
      event.preventDefault();
      
      const nickname = nicknameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const twicePw = twicePwRef.current.value;

      if (nickname === '') {
        alert('닉네임을 입력해주세요');
        return;
      }

      if (email === '') {
        alert('이메일을 입력해주세요.');
        return;
      } else if (pattern.test(email) == false) {
        //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
        alert('이메일형식이 올바르지 않습니다.');
        return;
      }

      if (password === '') {
        alert('비밀번호를 입력해주세요.');
        return;
      }

      if (twicePw === '') {
        alert('재확인 비밀번호를 입력해주세요.');
        return;
      }

      if (twicePw !== password) {
        alert('비밀번호가 같지 않습니다.');
        return;
      }

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

  // const user = auth.currentUser;
  // console.log('user', user);

  return (
    <form>
      <p>환영합니다</p>
      <p>오늘의 나와 함께 갓생만들기 시작해요</p>
      <div>
        <input ref={nicknameRef} placeholder="닉네임" value={nickname} onChange={nameHandler} />
        <br />
        <input ref={emailRef} type="email" placeholder="이메일" value={email} onChange={emailHandler} />
        <br />
        <input
          minLength="6"
          ref={passwordRef}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={passwordHandler}
        />
        <br />
        <input
          minlength="6"
          ref={twicePwRef}
          type="password"
          placeholder="비밀번호재확인"
          value={twicePw}
          onChange={twicePwHandler}
        />
      </div>
      <div>
        <button onClick={signUp}>회원가입</button>
      </div>
    </form>
  );
};

export default Signup;
