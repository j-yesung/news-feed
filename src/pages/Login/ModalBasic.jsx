import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const Modal = styled.div`
  width: 40%;
  height: 40%;

  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  button {
    background-color: gray;
    border: 1px solid black;
    border-radius: 8px;
  }
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
      <button onClick={closeModal}>X</button>
      <form>
        <div>
          <label>이메일 : </label>
          <input type="email" required value={email} onChange={onChange}></input>
          <button onClick={findPw}>비밀번호 재설정</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalBasic;
