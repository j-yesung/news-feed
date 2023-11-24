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
      <UpButton onClick={scrollTop}>&#8593;</UpButton>
      <DownButton onClick={scrollDown}>&#8595; </DownButton>
    </div>
  );
};

export default UpDown;

const UpButton = styled.button`
  padding: 10px;
  position: fixed;
  bottom: 90px;
  right: 25px;
  border: none;
  background-color: #f4eba5;
  z-index: 99;
  font-size: 30px;
  border-radius: 10px;
  width: 60px;
  box-shadow: 2px 2px 2px #aaa;
  font-weight: bold;
  &:hover {
    background-color: #ccc;
  }
`;
const DownButton = styled.button`
  padding: 10px;
  position: fixed;
  font-weight: bold;
  bottom: 20px;
  border: none;
  box-shadow: 2px 2px 2px #aaa;
  border-radius: 10px;
  right: 25px;
  font-size: 30px;
  background-color: #a5c7bb;
  width: 60px;
  z-index: 99;
  &:hover {
    background-color: #ccc;
  }
`;