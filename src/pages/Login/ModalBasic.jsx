import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';
import * as S from './Login.styled';
const Bg = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Modal = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  width: 400px;
  position: absolute;
  left: 50%;
  border-radius: 15px;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 10px #555;
`;

const CloseBtn = styled.button`
  font-size: 29px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  transform: translate(0px, -2px);
`;
const Email = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-top: 30px;
  &::placeholder {
    color: #ccc;
  }
`;

export const ResetPwBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f4eba5 !important;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const NameClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ModalBasic = ({ setModalOpen }) => {
  const [email, setEmail] = useState('');

  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onChange = event => {
    setEmail(event.target.value);
  };

  const findPw = async () => {
    try {
      console.log(auth, email);
      await sendPasswordResetEmail(auth, email);
      alert('메일이 전송되었습니다.');
    } catch (error) {
      alert(error.code, error.message);
      alert('비밀번호가 재설정 이메일을 전송하는데 실패했습니다 ');
    }
  };
  return (
    <>
      <Bg>
        <Modal>
          <NameClose>
            <h2>비밀번호 재설정</h2>
            <CloseBtn onClick={closeModal}>&#10005;</CloseBtn>
          </NameClose>

          <form>
            <div>
              <Email
                type="email"
                value={email}
                placeholder="이메일"
                onChange={onChange}
                style={{ border: isEmailValid ? '1px solid blue' : '1px solid red' }}></Email>
              {isEmailValid ? (
                <S.ValidationText style={{ color: 'blue' }}>이메일이 올바르게 작성되었습니다!</S.ValidationText>
              ) : (
                <S.ValidationText style={{ color: 'red' }}>이메일을 형식에 맞게 작성해주세요!</S.ValidationText>
              )}
              <ResetPwBtn onClick={findPw} disabled={!isEmailValid}>
                비밀번호 재설정
              </ResetPwBtn>
            </div>
          </form>
        </Modal>
      </Bg>
    </>
  );
};

export default ModalBasic;
