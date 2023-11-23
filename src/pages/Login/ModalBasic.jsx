import React from 'react';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';

// const modalRef = useRef < HTMLDivElement > null;
const Modal = styled.div`
  width: 40%;
  height: 40%;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
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
  const closeModal = () => {
    setModalOpen(false);
  };

  //   useEffect(() => {
  //     //     // 이벤트 핸들러 함수
  //     const handler = event => {
  //       //       // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  //       if (modalRef.current && !modalRef.current.contains(event.target)) {
  //         setModalOpen(false);
  //       }
  //     };

  //     //     // 이벤트 핸들러 등록
  //     document.addEventListener('mousedown', handler);
  //     // document.addEventListener('touchstart', handler); // 모바일 대응

  //     return () => {
  //       // 이벤트 핸들러 해제
  //       document.removeEventListener('mousedown', handler);
  //       // document.removeEventListener('touchstart', handler); // 모바일 대응
  //     };
  //   });

  return (
    // <Modal ref={modalRef}>
    <Modal>
      ModalBasic
      <button onClick={closeModal}>X</button>
      <form>
        <div>
          <label>이메일 : </label>
          <input type="email" required></input>
          <button>이메일찾기</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalBasic;
