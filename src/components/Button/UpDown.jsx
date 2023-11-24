import styled from 'styled-components';
const UpDown = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <UpButton onClick={scrollTop}>TOP</UpButton>
      <DownButton onClick={scrollDown}>Down</DownButton>
    </div>
  );
};

export default UpDown;

const UpButton = styled.button`
  padding: 15px 10px;
  position: fixed;
  bottom: 90px;
  right: 25px;
  border: none;
  background-color: #f4eba5;
  z-index: 99;
  border-radius: 5px;
  width: 60px;
  &:hover {
    background-color: #ccc;
  }
`;
const DownButton = styled.button`
  padding: 15px 10px;
  position: fixed;
  bottom: 20px;
  border: none;
  border-radius: 5px;
  right: 25px;
  background-color: #a5c7bb;
  width: 60px;
  z-index: 99;
  &:hover {
    background-color: #ccc;
  }
`;
