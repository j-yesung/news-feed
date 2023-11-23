import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendSignInLinkToEmail,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../../firebase';
// import ModalBasic from './ModalBasic';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticatedEmail, setAuthenticatedEmail] = useState('');

  //모달창
  const [modalOpen, setModalOpen] = useState(false);
  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const signUp = event => {
    //회원가입 페이지로 이동
  };
  const signIn = async event => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('로그인이 완료되었습니다.');
      setAuthenticatedEmail(email);
      setPassword('');
      setEmail('');
    } catch (error) {
      alert('로그인 실패');
      console.log(error.message);
    }
  };
  //로그아웃 정보
  const logOut = async event => {
    if (authenticatedEmail !== '') {
      event.preventDefault();
      await signOut(auth);
      setAuthenticatedEmail('');
      alert('로그아웃 되었습니다.');
    } else {
      event.preventDefault();
      alert('현재 로그인이 되어 있지 않습니다.');
    }
  };
  //사용자 변경시 담기는 정보
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('user 변환 정보', user);
    });
  }, [authenticatedEmail]);

  //비밀번호 찾기
  const findPw = async () => {
    try {
      // await sendSignInLinkToEmail(auth, email);
      // await sendPasswordResetEmail(auth, authenticatedEmail);
      alert('메일이 전송되었습니다.');
    } catch (error) {
      console.log(error.message);
      alert('비밀번호 찾기 ');
    }
  };

  // 모달창 함수
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div className="App">
      <h2>로그인 페이지</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input type="email" value={email} name="email" onChange={onChange} required></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input type="password" value={password} name="password" onChange={onChange} required></input>
        </div>
        <button onClick={signUp}>회원가입</button>
        <button onClick={signIn}>로그인</button>
        <button onClick={logOut}>로그아웃</button>

        {/* firebase로 부터 받아온 userCredential에 값이 있을 경우만 보이는 */}

        <button onClick={showModal}>비밀번호찾기</button>
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}

        {/* <button onClick={findPw}>비밀번호찾기</button> */}
      </form>
    </div>
  );
};

export default Login;
