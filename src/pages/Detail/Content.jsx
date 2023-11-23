import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDocs } from 'firebase/firestore';
import { deleteNewsFeed, newsFeedCollection, updateNewFeed } from '../../firebase';
import { deleteContents, editContents, setContents, updateContents } from 'redux/modules/content';

const Content = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contentsData = useSelector(state => state.contents.contents);
  const findData = contentsData.find(contents => contents.id === params.id);

  const titleRef = useRef();
  const contentRef = useRef();

  // 조회 => 여기서 또 조회하는 이유는 새로고침 때문이다.
  useEffect(() => {
    const getContents = async () => {
      const querySnapshot = await getDocs(newsFeedCollection);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      dispatch(setContents(data));
    };
    getContents();
  }, [dispatch]);

  console.log('🚀 findData:', findData);

  // 수정 버튼 클릭했을 때
  const HandleEditingToggle = id => dispatch(editContents(id));

  // 수정 완료 버튼을 눌렀을 때
  const HandleUpdateNewsFeed = async updateData => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const updates = {
      title: title,
      content: content,
      isEditing: false,
    };

    await updateNewFeed(updateData.id, updates);
    dispatch(updateContents(updateData.id, updates));
    // TODO: 수정 완료하면 해당 화면으로 다시 리렌더링 되게 수정할 수 있도록.
    navigate('/');
  };

  // 삭제
  const HandleDeleteNewsFeed = async id => {
    await deleteNewsFeed(id);
    dispatch(deleteContents(id));
    navigate('/');
  };

  return (
    <div>
      {/* findData가 존재하면 아래 내용 호출 */}
      {findData && (
        <>
          <img src={findData.pic} alt="사진" />
          <p>{findData.name}</p>
          {findData.isEditing ? (
            <div key={findData.id}>
              <input ref={titleRef} defaultValue={findData.title}></input>
              <textarea ref={contentRef} defaultValue={findData.content}></textarea>
            </div>
          ) : (
            <div key={findData.id}>
              <h2>{findData.title}</h2>
              <p>{findData.content}</p>
            </div>
          )}
          <p>{findData.date}</p>
          {findData.isEditing ? (
            <button onClick={() => HandleUpdateNewsFeed(findData)}>수정 완료</button>
          ) : (
            <button onClick={() => HandleEditingToggle(findData.id)}>수정</button>
          )}
          <button onClick={() => HandleDeleteNewsFeed(findData.id)}>삭제</button>
        </>
      )}
    </div>
  );
};

export default Content;
