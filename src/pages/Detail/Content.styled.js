import styled from 'styled-components';
export const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
`;

export const AvatarBox = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

export const View = styled.div`
  background-color: ${({ theme }) => theme.contentBgColor};
  color: ${({ theme }) => theme.contentTextColor};
  width: 1067px;
  border-radius: 20px;
  padding: 8px 10px 20px 20px;
  font-size: 20px;
  height: 552px;
  position: relative;

  @media (max-width: 1280px) {
    height: 100%;
    margin-top: 10px;
  }
`;

export const ModifyBtn = styled.button`
  padding: 10px 20px;
  border: none;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  cursor: pointer;
  right: 110px;
  top: 15px;
  border-radius: 5px;
  background-color: #f4eba5;
  &:hover {
    background-color: #a5c7bb;
  }
  @media (max-width: 450px) {
    position: relative;
    left: 0;
    top: 0;
  }
`;

export const ModiDeleButtons = styled.div`
  @media (max-width: 450px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;
export const FinishBox = styled.div`
  @media (max-width: 450px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const DeleteBtn = styled.button`
  padding: 10px 20px;
  top: 15px;
  border: none;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f4eba5;

  &:hover {
    background-color: #a5c7bb;
  }

  @media (max-width: 450px) {
    position: relative;
    top: 0;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 85px);
  @media (max-width: 768px) {
    height: auto;
  }
  //background-color: bisque;
`;

export const Name = styled.p`
  // background-color: azure;
  padding: 10px 5px;
  margin-left: 20px;
  font-weight: bold;
  width: 300px;
  font-size: 23px;
  @media (max-width: 409px) {
    width: 200px;
  }
`;

export const AvatarName = styled.div`
  display: flex;
  //background-color: lemonchiffon;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 5px 0 10px;
  border-bottom: 2px solid #a5c7bb;
  margin-bottom: 5px;
  @media (max-width: 768px) {
  }
`;

export const Date = styled.p`
  //background-color: antiquewhite;
  margin-left: 20px;
  padding: 5px;
  font-size: 16px;
`;

export const Content = styled.div`
  line-height: 2rem;
  height: 340px;
  background-color: ${({ theme }) => theme.contentBgColor};
  overflow: auto;
  width: 700px;
  padding-right: 15px;
  margin-bottom: 15px;
  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: auto;
  }
  // border-right: 3px double #ccc;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 28px;
  padding: 14px 0 10px;
  //background-color: aliceblue;
  width: 700px;
  margin-bottom: 2px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 698px;
  font-size: 20px;
  height: 360px;
  outline: none;
  line-height: 2rem;
  border: 1px solid #ccc;
  padding: 10px;

  border-radius: 10px;

  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const InputTitle = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: 698px;
  font-weight: bold;
  font-size: 28px;
  margin: 10px 0 10px;
  outline: none;
  border-radius: 10px;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const ViewCommentBox = styled.div`
  //background-color: blueviolet;
  display: flex;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
  }
`;

export const TitleTextarea = styled.div`
  width: 700px;

  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
`;

export const FinishBtn = styled.button`
  padding: 10px 20px;
  border: none;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f4eba5;
  &:hover {
    background-color: #a5c7bb;
  }
  @media (max-width: 450px) {
    position: relative;
  }
`;

export const HashTag = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 6px 8px;
    background-color: #a5c7bb;
    border-radius: 5px;
    color: #777;
    font-size: 0.9rem;
    font-weight: 600;
    &:first-child {
      margin-right: 10px;
      background-color: #f4eba5;
    }
  }
`;
