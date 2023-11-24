import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';

const Bg = styled.div`
  position: absolute;
  width: 100vw;
  background-color: aliceblue;
`;

const Modal = styled.div``;

const CloseBtn = styled.button``;
const Email = styled.input``;

export const ResetPwBtn = styled.button``;

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
    <>
      <Bg>
        <Modal>
          <h2>비밀번호 재설정</h2>
          <CloseBtn onClick={closeModal}>&#10005;</CloseBtn>
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
