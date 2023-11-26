import styled from 'styled-components';
export const Avatar = styled.img`
  width: 50px;
  margin-left: 10px;
`;

export const View = styled.div`
  background-color: #fff;
  width: 70%;
  border-radius: 20px;
  padding: 8px 10px 20px 20px;
  font-size: 20px;
  height: calc(100vh - 300px);
  position: relative;
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
  border-radius: 5px;
  background-color: #f4eba5;
  &:hover {
    background-color: #a5c7bb;
  }
`;
export const DeleteBtn = styled.button`
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
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 85px);

  //background-color: bisque;
`;

export const Name = styled.p`
  // background-color: azure;
  padding: 10px 5px;
  margin-left: 20px;
  font-weight: bold;
  width: 300px;
  font-size: 23px;
`;

export const AvatarName = styled.div`
  display: flex;
  //background-color: lemonchiffon;
  align-items: center;
  width: 100%;

  padding: 5px 0 10px;
  border-bottom: 2px solid #a5c7bb;
  margin-bottom: 5px;
`;

export const Date = styled.p`
  //background-color: antiquewhite;
  margin-left: 20px;
  padding: 5px;
  font-size: 16px;

  @media (max-width: 1099px) {
    //
  }
`;

export const Content = styled.div`
  line-height: 2rem;
  height: 360px;
  background-color: #fff;
  overflow: auto;
  width: 700px;
  padding-right: 15px;
  // border-right: 3px double #ccc;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 28px;
  padding: 20px 0 20px;
  //background-color: aliceblue;
  width: 700px;
  margin-bottom: 2px;
  //  border-right: 3px double #ccc;
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
`;

export const InputTitle = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: 700px;
  font-weight: bold;
  font-size: 28px;
  margin: 10px 0 10px;
  outline: none;
  border-radius: 10px;
`;

export const ViewCommentBox = styled.div`
  //background-color: blueviolet;
  display: flex;
`;
