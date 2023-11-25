import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  const contentsData = useSelector(state => state.contents.contents);

  return (
    <>
      <S.Button onClick={() => navigate('/write')}>글쓰기</S.Button>
      <S.BoxContainer>
        <S.ContentsList>
          {contentsData.map(contents => (
            <S.ContentsBox key={contents.id} onClick={() => navigate(`/content/${contents.id}`)}>
              <S.Title>{contents.title}</S.Title>
              <S.AvatarName>
                <S.Avatar src={contents.pic} alt="사진" />
                <S.Name>{contents.name}</S.Name>
              </S.AvatarName>

              <S.Content>{contents.content}</S.Content>
              <S.Date>{contents.date}</S.Date>
            </S.ContentsBox>
          ))}
        </S.ContentsList>
      </S.BoxContainer>
    </>
  );
};

export default Home;
