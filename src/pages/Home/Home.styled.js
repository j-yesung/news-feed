import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.buttonBgColor};
  border-radius: 5px;
  float: right;

  margin-top: 20px;

  font-size: 18px;
  &:hover {
    background-color: ${({ theme }) => theme.signatureColorTwo};
  }
`;

export const AvartarFrame = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  background-color: ${({ theme }) => theme.contentsHeaderColor};
  padding: 13px 0px 13px 20px;
  font-weight: bold;
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.textColor};
`;

export const Content = styled.p`
  padding: 5px 0 10px;
  line-height: 1.8rem;
  font-size: 20px;
  margin: 0px 20px 63px;
  height: 210px;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const Name = styled.p`
  padding: 20px 10px;
  font-size: 20px;
  width: calc(100% - 50px);
`;

export const Date = styled.p`
  background-color: ${({ theme }) => theme.contentsFooterColor};
  padding: 20px 10px;
  text-align: center;
  font-weight: bold;
  font-size: 23px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const ContentsBox = styled.div`
  background-color: #fff;
  width: 300px;
  margin: 30px;
  position: relative;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 1660px) {
    margin: 20px;
  }
  @media (max-width: 1579px) {
    margin: 10px;
  }
`;

export const ContentsList = styled.div`
  display: flex;
  margin-top: 0px;
  width: 1440px;
  flex-wrap: wrap;
  //background-color: violet;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 1660px) {
    justify-content: center;
    width: 100vw;
  }
`;

export const AvatarName = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxContainer = styled.div`
  z-index: 999;
  display: flex;
  width: 100%;
  justify-content: center;
`;
