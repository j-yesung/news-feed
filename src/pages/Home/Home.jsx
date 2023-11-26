import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.styled';
import { useState, useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const contentsData = useSelector(state => state.contents.contents);
  const categoryData = useSelector(state => state.navbar);
  console.log('카테고리 나와라', categoryData);
  //스테이트 받아오기

  const category = [
    ['음악', '스포츠'],
    ['직장인', '대학생'],
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < category[i].length; j++) {
        if (categoryData.category1 === category[i][j]) {
          setSelectedCategory(category[i][j]);
          return;
        }
      }
    }
    setSelectedCategory('');
  }, [categoryData]);

  const filteredContents = selectedCategory
    ? contentsData.filter(content => content.category === selectedCategory)
    : contentsData;

  return (
    <>
      <S.Button onClick={() => navigate('/write')}>글쓰기</S.Button>
      <S.BoxContainer>
        <S.ContentsList>
          {filteredContents.map(contents => (
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
