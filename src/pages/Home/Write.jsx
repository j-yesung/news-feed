import { addDoc } from 'firebase/firestore';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContents } from 'redux/modules/content';
import { newsFeedCollection } from '../../firebase';
import { getFormattedDate } from '../../utils/date';
import { useState } from 'react';
import shortid from 'shortid';
import * as S from './Write.styled';

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.user.user);
  const titleRef = useRef();
  const contentRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState('default');
  const [selectedCategory2, setSelectedCategory2] = useState('default');

  /**
   * 뉴스피드 추가하기
   */
  const createNewsFeedArticle = async () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const currentDate = new Date();
    const formattedDate = getFormattedDate(currentDate);
    const newContents = {
      email: authUser.email,
      name: authUser.displayName,
      title: title,
      content: content,
      date: formattedDate,
      pic: authUser.photoURL,
      seq: shortid.generate(),
      isEditing: false,
      category: selectedCategory,
      category2: selectedCategory2,
    };

    if (!title || !content) return alert('제목과 내용을 입력해주세요.');

    const docs = await addDoc(newsFeedCollection, newContents);
    dispatch(addContents({ id: docs.id, ...newContents }));
    navigate('/');

    titleRef.current.value = '';
    contentRef.current.value = '';
  };

  return (
    <>
      <S.Box>
        <S.WriteBox>
          <S.TitleInput ref={titleRef} type="text" name="title" placeholder="제목" />
          <S.Textarea ref={contentRef} placeholder="내용" />
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            <option value="default" disabled>
              선택하세요
            </option>
            <option value="음악">음악</option>
            <option value="스포츠">스포츠</option>
          </select>
          <select value={selectedCategory2} onChange={e => setSelectedCategory2(e.target.value)}>
            <option value="default" disabled>
              선택하세요
            </option>
            <option value="대학생">대학생</option>
            <option value="직장인">직장인</option>
          </select>
          <S.Button onClick={createNewsFeedArticle}>작성 완료</S.Button>
        </S.WriteBox>
      </S.Box>
    </>
  );
};

export default Write;
