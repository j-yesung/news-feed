import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { newsFeedCollection } from '../../firebase';
import { deleteContents, setContents, updateContents } from 'redux/modules/content';
import { getFormattedDate } from '../../utils/date';

const Content = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contentsData = useSelector(state => state.contents.contents);
  const findData = contentsData.find(contents => contents.id === params.id);

  // 조회
  useEffect(() => {
    const getContents = async () => {
      const querySnapshot = await getDocs(newsFeedCollection);
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch(setContents(data));
    };
    getContents();
  }, [dispatch]);

  console.log('🚀 findData:', findData);

  // 수정
  const HandleUpdateNewsFeed = async updateData => {
    try {
      // 수정할 문서 참조
      const docRef = doc(newsFeedCollection, updateData.id);

      // 업데이트할 값들 객체로 정의
      const updates = {
        title: updateData.title,
        content: updateData.content,
        data: getFormattedDate(new Date()),
      };

      await updateDoc(docRef, updates);

      // Redux state 업데이트
      dispatch(updateContents(updateData.id, updateData));
      console.log('업데이트!');
    } catch (error) {
      console.error('데이터 업데이트 중 에러 발생:', error);
    }
  };

  //삭제
  const HandleDeleteNewsFeed = async deleteData => {
    try {
      // 삭제할 문서 참조
      const docRef = doc(newsFeedCollection, deleteData.id);
      await deleteDoc(docRef);

      // Redux state 업데이트
      dispatch(deleteContents(deleteData.id));
      console.log('삭제 완료');
      // 삭제 후 Home 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error('데이터 삭제 중 에러 발생:', error);
    }
  };

  return (
    <div>
      {/* findData가 존재하면 아래 내용 호출 */}
      {findData && (
        <>
          <img src={findData.pic} alt="사진" />
          <p>{findData.name}</p>
          <h2>{findData.title}</h2>
          <p>{findData.content}</p>
          <p>{findData.date}</p>
          <button onClick={() => HandleUpdateNewsFeed(findData)}>수정</button>
          <button onClick={() => HandleDeleteNewsFeed(findData)}>삭제</button>
        </>
      )}
    </div>
  );
};

export default Content;
