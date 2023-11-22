import React, { useEffect } from 'react';
import Form from './Write';
import { getDocs } from 'firebase/firestore';
import { newsFeedCollection } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setContents } from 'redux/modules/contents';

const Home = () => {
  const dispatch = useDispatch();
  // 컨텐츠 데이터 조회
  const dataSelector = useSelector(state => state.contents);
  console.log('dataSelector: ', dataSelector);

  useEffect(() => {
    const getContents = async () => {
      const querySnapshot = await getDocs(newsFeedCollection);
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch(setContents(data)); // 액션 디스패치
    };
    getContents();
  }, [dispatch]);

  return (
    <>
      <Form />
    </>
  );
};

export default Home;
