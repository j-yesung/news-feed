import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from 'redux/modules/login';
import githubButton from '../../assets/github.svg';
import { auth } from '../../firebase';
import * as S from './Login.styled';
import ModalBasic from './ModalBasic';
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
    <S.LoginBox>
      <h2>안녕하세요</h2>
      <p>만나서 반가워요. 오늘 하루는 행복했나요?</p>
      <form>
        <div>
          <S.EmailInput
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            placeholder="이메일"
            required></S.EmailInput>
        </div>
        <div>
          <S.PwInput
            type="password"
            value={password}
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
            required></S.PwInput>
        </div>
        <S.LoginBtn onClick={signIn} ref={idRef} style={{ backgroundColor: isValid ? '#4ec5f4' : 'white' }}>
          오늘의 나 시작하기
        </S.LoginBtn>
        <S.BtnBundle>
          <S.FindPwBtn onClick={showModal}>비밀번호 찾기</S.FindPwBtn>
          <S.SignUpBtn onClick={() => navigation('/signup')}>회원가입</S.SignUpBtn>
        </S.BtnBundle>
        <S.SocialLogin>
          <S.GithubButton src={githubButton} />
        </S.SocialLogin>
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
      </form>
    </S.LoginBox>
  );
};

export default Login;
