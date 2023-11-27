import { addDoc } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContents } from 'redux/modules/content';
import shortid from 'shortid';
import { newsFeedCollection } from '../../firebase';
import { getFormattedDate } from '../../utils/date';
import * as S from './Write.styled';

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.user.user);
  const titleRef = useRef();
  const contentRef = useRef();
  const [selectedCategory1, setSelectedCategory1] = useState('default');
  const [selectedCategory2, setSelectedCategory2] = useState('default');
  const [selectedCategory3, setSelectedCategory3] = useState('default');

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
      category: selectedCategory1 + `,` + selectedCategory2 + `,` + selectedCategory3,
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
          <S.SelectedCategory value={selectedCategory1} onChange={e => setSelectedCategory1(e.target.value)}>
            <option value="default" disabled>
              선택하세요
            </option>
            <option value="즐거운날">즐거운날</option>
            <option value="우울한날">우울한날</option>
            <option value="화가난날">화가난날</option>
            <option value="행복한날">행복한날</option>
          </S.SelectedCategory>
          <S.SelectedCategory2 value={selectedCategory2} onChange={e => setSelectedCategory2(e.target.value)}>
            <option value="default" disabled>
              선택하세요
            </option>
            <option value="대학생">대학생</option>
            <option value="직장인">직장인</option>
          </S.SelectedCategory2>
          <S.SelectedCategory2 value={selectedCategory3} onChange={e => setSelectedCategory3(e.target.value)}>
            <option value="default" disabled>
              선택하세요
            </option>
            <option value="MBTI-E">MBTI-E</option>
            <option value="MBTI-I">MBTI-I</option>
          </S.SelectedCategory2>
          <S.Button onClick={createNewsFeedArticle}>작성 완료</S.Button>
        </S.WriteBox>
      </S.Box>
    </>
  );
};

export default Write;
