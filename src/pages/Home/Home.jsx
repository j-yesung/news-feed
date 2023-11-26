import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.styled';
import { useState, useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const contentsData = useSelector(state => state.contents.contents);
  const categoryData = useSelector(state => state.navbar);

  const category = [
    ['음악', '스포츠'],
    ['직장인', '대학생'],
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    let foundCategory = '';
    for (let i = 0; i < category.length; i++) {
      for (let j = 0; j < category[i].length; j++) {
        if (category[i][j] === categoryData.category1 || category[i][j] === categoryData.category2) {
          foundCategory = category[i][j];
          break;
        }
      }
      break;
    }
    setSelectedCategory(foundCategory);
    console.log('categoryData', categoryData);
    // console.log('셋카테고리', categoryData);
  }, [categoryData]);

  const filteredContents = selectedCategory
    ? contentsData.filter(content => [content.category, content.category2].includes(selectedCategory)) //content.category === selectedCategory)
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
