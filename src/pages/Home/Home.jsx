import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Write from './Write';
import { getDocs } from 'firebase/firestore';
import { newsFeedCollection } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setContents } from 'redux/modules/content';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Section 컴포넌트 안에 존재하는 컴포넌트입니다.
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contentsData = useSelector(state => state.contents.contents);
  console.log('contentsData: ', contentsData);

  useEffect(() => {
    const getContents = async () => {
      const querySnapshot = await getDocs(newsFeedCollection);
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch(setContents(data));
    };
    getContents();
  }, [dispatch]);

  const goToWritePage = () => {
    navigate('/write');
  };

  return (
    <>
      {/* 글쓰기 버튼을 눌렀을 때, Write 컴포넌트로 이동해야 합니다. */}
      {/* <Write /> */}
      <Link to="/write">글쓰기</Link>
      {contentsData.map(contents => (
        <div key={contents.id}>
          <h2>{contents.title}</h2>
          <p>{contents.content}</p>
        </div>
      ))}
      <Button onClick={goToWritePage}>글쓰기</Button>
    </>
  );
};

export default Home;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  background-color: #f4eba5;
  border-radius: 5px;

  font-size: 18px;
  &:hover {
    background-color: #a5c7bb;
  }
`;
