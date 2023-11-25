import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from 'redux/modules/login';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import githubButton from '../../assets/github.svg';
import googleButton from '../../assets/google.svg';
import { auth } from '../../firebase';
import * as S from './Login.styled';
import ModalBasic from './ModalBasic';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [userData, setUserData] = useState(null);

  const idRef = useRef();
  const authUser = useSelector(state => state.user.user);

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.length >= 6;

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

  // 모달창 함수
  const showModal = event => {
    event.preventDefault();
    setModalOpen(true);
  };

  // 구글로그인
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then(data => {
        setUserData(data.user); // user data 설정
        navigation('/');
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleGithubLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then(data => {
        setUserData(data.user); // user data 설정
        navigation('/');
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <>
      <S.LoginBox>
        <h2>안녕하세요</h2>
        <p>만나서 반가워요. 오늘 하루는 행복했나요?</p>
        <form>
          <div>
            <S.EmailInput
              type="text"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="이메일"
              style={{ border: isEmailValid ? '1px solid blue' : '1px solid red' }}></S.EmailInput>
          </div>
          {isEmailValid ? (
            <S.ValidationText style={{ color: 'blue' }}>이메일이 올바르게 작성되었습니다!</S.ValidationText>
          ) : (
            <S.ValidationText style={{ color: 'red' }}>이메일을 형식에 맞게 작성해주세요!</S.ValidationText>
          )}
          <div>
            <S.PwInput
              type="password"
              value={password}
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
              style={{ border: isPasswordValid ? '1px solid blue' : '1px solid red' }}></S.PwInput>
          </div>
          {isPasswordValid ? (
            <S.ValidationText style={{ color: 'blue' }}>비밀번호를 올바르게 작성되었습니다!</S.ValidationText>
          ) : (
            <S.ValidationText style={{ color: 'red' }}>비밀번호는 6자리 이상 입력해주세요!</S.ValidationText>
          )}
          <S.LoginBtn onClick={signIn} ref={idRef} disabled={!isEmailValid || !isPasswordValid}>
            오늘의 나 시작하기
          </S.LoginBtn>
          <S.BtnBundle>
            <S.FindPwBtn onClick={showModal}>비밀번호 찾기</S.FindPwBtn>
            <S.SignUpBtn onClick={() => navigation('/signup')}>회원가입</S.SignUpBtn>
          </S.BtnBundle>
          <S.SocialLogin>
            <button type="button" style={{ background: 'transparent', border: 'none' }} onClick={handleGithubLogin}>
              <S.GithubButton style={{}} src={githubButton}></S.GithubButton>
            </button>
            <button type="button" style={{ background: 'transparent', border: 'none' }} onClick={handleGithubLogin}>
              <S.GooglebButton style={{}} src={googleButton}></S.GooglebButton>
            </button>
          </S.SocialLogin>
        </form>
      </S.LoginBox>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
    </>
  );
};

export default Login;
