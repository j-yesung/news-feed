import React, { useRef } from 'react';
import { newsFeedCollection } from '../../firebase';
import { addDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { addContents } from 'redux/modules/content';
import { getFormattedDate } from '../../utils/date';
import userIcon from '../../assets/user.svg';
import * as S from './Write.styled';
import shortId from 'shortid';

const Write = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();

  /**
   * 게시글 추가하기
   * TODO: 유효성 검사 하기
   */
  const createNewsFeedArticle = async () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const currentDate = new Date();
    const formattedDate = getFormattedDate(currentDate);

    const newContents = {
      id: shortId.generate(),
      name: '닉네임^^',
      title: title,
      content: content,
      date: formattedDate,
      pic: userIcon,
    };
    const docs = await addDoc(newsFeedCollection, newContents);
    dispatch(addContents({ id: docs.id, ...newContents }));

    titleRef.current.value = '';
    contentRef.current.value = '';
  };

  return (
    <S.WriteBox>
      <S.TitleInput ref={titleRef} type="text" name="title" placeholder="제목" />
      <S.Textarea ref={contentRef} placeholder="내용" />
      <S.Button onClick={createNewsFeedArticle}>작성 완료</S.Button>
    </S.WriteBox>
  );
};

export default Write;
