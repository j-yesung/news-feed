import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.styled';
const Home = () => {
  const navigate = useNavigate();
  const contentsData = useSelector(state => state.contents.contents);
  const categoryData = useSelector(state => state.navbar);
  const [filteredData, setFilteredData] = useState([]);
  // console.log(contentsData); // [{ category: "음악", ....}, { category: "스포츠,대학생" }, {}, ....]
  // console.log(categoryData); // { category: "default"}

  useEffect(() => {
    if (categoryData.category !== 'default') {
      setFilteredData(
        contentsData.filter(content => {
          return content.category?.includes(categoryData.category);
        }),
      );
    } else {
      setFilteredData(contentsData);
    }
  }, [categoryData, contentsData]);

  return (
    <>
      <S.Button onClick={() => navigate('/write')}>글쓰기</S.Button>
      <S.BoxContainer>
        <S.ContentsList>
          {filteredData.map(contents => (
            <S.ContentsBox key={contents.id} onClick={() => navigate(`/content/${contents.id}`)}>
              <S.Title>{contents.title}</S.Title>
              <S.AvatarName>
                <S.AvartarFrame>
                  <S.Avatar src={contents.pic} alt="사진" />
                </S.AvartarFrame>
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
