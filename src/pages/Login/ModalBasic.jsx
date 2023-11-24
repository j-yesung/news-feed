import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';

const Modal = styled.div`
  width: 100%;
  height: 100%;

  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: white;
  border-radius: 8px;
`;

const CloseBtn = styled.button`
  border: none;
  border-radius: 8px;
  background-color: transparent;
  font-weight: bold;
  right: 0;
  top: 0;
  position: absolute;
  font-size: 29px;
  margin-right: 20px;
  margin-top: 10px;
`;
const Email = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 20px 0;
  outline: none;
  border-radius: 8px;
`;
const ModalBasic = ({ setModalOpen }) => {
  const [email, setEmail] = useState('');
  const closeModal = () => {
    setModalOpen(false);
  };

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
    <Modal>
      ModalBasic
      <CloseBtn onClick={closeModal}>&#10005;</CloseBtn>
      <form>
        <div>
          <label>이메일 : </label>
          <Email type="email" required value={email} onChange={onChange}></Email>
          <button onClick={findPw}>비밀번호 재설정</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalBasic;
