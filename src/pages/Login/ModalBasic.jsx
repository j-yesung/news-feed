import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';

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
  margin-bottom: 30px;
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
  &:hover {
    background-color: #a5c7bb !important;
  }
`;

const ModalBasic = ({ setModalOpen }) => {
  const [email, setEmail] = useState('');
  const closeModal = () => {
    setModalOpen(false);
  };

  const NameClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const onChange = event => {
    setEmail(event.target.value);
  };

  const findPw = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('메일이 전송되었습니다.');
    } catch (error) {
      console.log(error.code, error.message);
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
              <Email type="email" value={email} placeholder="이메일" onChange={onChange}></Email>
              <ResetPwBtn onClick={findPw}>비밀번호 재설정</ResetPwBtn>
            </div>
          </form>
        </Modal>
      </Bg>
    </>
  );
};

export default ModalBasic;
