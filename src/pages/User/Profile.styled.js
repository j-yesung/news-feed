import styled from 'styled-components';

export const ProfileTop = styled.div`
  // background-color: lemonchiffon;
  width: 100%;
  margin-left: 20px;
  line-height: 2rem;
  /* @media only screen and (max-width: 935px) {
    margin-left: 0;
  }*/
  @media only screen and (max-width: 935px) {
    border-top: 2px solid #ccc;
    padding-top: 10px;
    margin-left: 0;
  }
`;
export const ProfileName = styled.div`
  //background-color: blanchedalmond;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ChangeName = styled.button`
  background-color: #f4eba5;
  border: none;
  font-weight: bold;
  width: 500px;
  padding: 10px 20px;
  cursor: pointer;
  width: 400px;
  border-radius: 5px;
  &:hover {
    background-color: #a5c7bb;
  }
`;

export const SaveBtn = styled.button`
  background-color: #f4eba5;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  width: 400px;

  cursor: pointer;
  &:hover {
    background-color: #a5c7bb;
  }
`;
export const ProfileBox = styled.div`
  background-color: ${({ theme }) => theme.contentBgColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.contentTextColor};
  padding: 10px;
  width: 900px;
  margin: 130px auto 30px;
  box-shadow: 3px 3px 10px #aaa;
  @media only screen and (max-width: 1120px) {
    width: 800px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
  }
  @media only screen and (max-width: 935px) {
    flex-wrap: wrap;
    padding: 10px 10px 30px;
    width: 650px;
  }
  @media only screen and (max-width: 870px) {
    width: 600px;
  }
  @media only screen and (max-width: 820px) {
    width: 500px;
  }
  @media only screen and (max-width: 768px) {
    width: 700px;
  }
  @media only screen and (max-width: 730px) {
    width: 600px;
  }
  @media only screen and (max-width: 630px) {
    width: 500px;
  }
  @media only screen and (max-width: 525px) {
    width: 400px;
  }
  @media only screen and (max-width: 450px) {
    width: 350px;
  }
  @media only screen and (max-width: 380px) {
    width: 300px;
  }
`;

export const MyEmail = styled.p`
  font-size: 1.3rem;
  text-align: center;
  padding-left: 10px;
`;

export const NowNickName = styled.p`
  font-size: 1.3rem;
  padding-left: 10px;

  width: 500px;
  margin: 20px 0;
  text-align: center;
`;

export const ChangeInput = styled.input`
  outline: none;
  border: none;
  width: 350px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  font-size: 1.3rem;
`;

export const MyBulletin = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: 5px solid #a5c7bb;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.contentTextColor};
`;

export const Bulletin = styled.div`
  background-color: ${({ theme }) => theme.contentBgColor};
  color: ${({ theme }) => theme.contentTextColor};
  padding: 10px;
  cursor: pointer;
  margin: 30px 0;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #aaa;
  padding: 20px;
`;

export const BulletinBox = styled.div`
  width: 900px;
  margin: 50px auto 20px;
  font-size: 1.2rem;

  line-height: 2rem;
  @media only screen and (max-width: 1120px) {
    width: 800px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
  }
  @media only screen and (max-width: 935px) {
    width: 650px;
  }
  @media only screen and (max-width: 870px) {
    width: 600px;
  }
  @media only screen and (max-width: 820px) {
    width: 500px;
  }
  @media only screen and (max-width: 768px) {
    width: 700px;
  }
  @media only screen and (max-width: 730px) {
    width: 600px;
  }
  @media only screen and (max-width: 630px) {
    width: 500px;
  }
  @media only screen and (max-width: 525px) {
    width: 400px;
  }
  @media only screen and (max-width: 450px) {
    width: 350px;
  }
  @media only screen and (max-width: 380px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #a5c7bb;
`;

export const Date = styled.p`
  border-top: 2px solid #a5c7bb;
  padding-top: 14px;
  text-align: right;
`;

export const Contents = styled.div`
  padding: 20px 0;
`;
