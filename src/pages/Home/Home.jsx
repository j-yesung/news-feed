import { getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setContents } from 'redux/modules/content';
import { newsFeedCollection } from '../../firebase';
import * as S from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contentsData = useSelector(state => state.contents.contents);

  // 뉴스피드 불러오기
  useEffect(() => {
    const getContents = async () => {
      const querySnapshot = await getDocs(newsFeedCollection);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      dispatch(setContents(data));
      console.log('🚀 getContents ~ data:', data);
    };
    getContents();
  }, [dispatch]);

  const goToWritePage = () => {
    navigate('/write');
  };
  const goToContentPage = id => {
    navigate(`/content/${id}`);
  };

  return (
    <>
      <S.Button onClick={goToWritePage}>글쓰기</S.Button>
      <S.BoxContainer>
        <S.ContentsList>
          {contentsData.map(contents => (
            <S.ContentsBox key={contents.id} onClick={() => goToContentPage(contents.id)}>
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
