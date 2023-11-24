import { useState, useEffect, useRef } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import ModalBasic from './ModalBasic';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setLogout } from 'redux/modules/login';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticatedEmail, setAuthenticatedEmail] = useState('');
  const idRef = useRef();
  const [isValid, setIsValid] = useState(false);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  //모달창
  const [modalOpen, setModalOpen] = useState(false);
  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      const emailValue = event.target.value;
      emailValue.includes('@') && password.length >= 5 ? setIsValid(true) : setIsValid(false);
      setEmail(value);
    }
    if (name === 'password') {
      const pwdValue = event.target.value;
      pwdValue.length >= 6 ? setIsValid(true) : setIsValid(false);
      setPassword(value);
    }
  };

  const navigationSingup = () => {
    navigation('/signup');
  };

  //로그인
  const signIn = async event => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      let nickName = auth.currentUser.displayName;

      let userInfo = {
        email,
        password,
        nickName,
      };
      dispatch(setLogin(userInfo));
      alert('로그인이 완료되었습니다.');
    } catch (error) {
      alert('로그인 실패');
      console.log(error.message);
    }
  };

  //로그아웃 정보
  const logOut = async event => {
    //조건을 로컬스토리지 세션으로 걸어야함
    if (auth !== '') {
      event.preventDefault();
      await signOut(auth);
      dispatch(setLogout());
      alert('로그아웃 되었습니다.');
    } else {
      event.preventDefault();
      alert('현재 로그인이 되어 있지 않습니다.');
    }
  };

  console.log(auth.currentUser);
  //비밀번호 찾기
  const findPw = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('메일이 전송되었습니다.');
    } catch (error) {
      console.log(error.message);
      alert('비밀번호 찾기 ');
    }
  };

  useEffect = (() => {}, []);

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
        <button onClick={navigationSingup}>회원가입</button>

        {auth.currentUser === null ? (
          <button onClick={signIn} ref={idRef} style={{ backgroundColor: isValid ? '#4ec5f4' : 'white' }}>
            로그인
          </button>
        ) : (
          <button onClick={logOut}>로그아웃</button>
        )}

        <button onClick={showModal}>비밀번호찾기</button>
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}

        {/* <button onClick={findPw}>비밀번호찾기</button> */}
      </form>
    </div>
  );
};

export default Login;
