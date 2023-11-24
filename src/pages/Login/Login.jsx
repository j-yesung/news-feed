import { useState, useRef } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import ModalBasic from './ModalBasic';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from 'redux/modules/login';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const idRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const authUser = useSelector(state => state.user.user);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  // 모달창
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

  // 로그인
  const signIn = async event => {
    console.log('인증관리', auth);
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      let userInfo = {
        email,
        password,
      };
      dispatch(setLogin(userInfo));
      alert('로그인이 완료되었습니다.');
      navigation('/');
    } catch (error) {
      alert('로그인 실패');
      console.log(error.message);
    }
  };

  // 비밀번호 찾기
  const findPw = async () => {
    try {
      await sendPasswordResetEmail(authUser, email);
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
        <button onClick={() => navigation('/signup')}>회원가입</button>
        <button onClick={signIn} ref={idRef} style={{ backgroundColor: isValid ? '#4ec5f4' : 'white' }}>
          로그인
        </button>
        <button onClick={showModal}>비밀번호 찾기</button>
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
      </form>
    </div>
  );
};

export default Login;
