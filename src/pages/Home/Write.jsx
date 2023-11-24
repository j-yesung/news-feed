import { addDoc } from 'firebase/firestore';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContents } from 'redux/modules/content';
import userIcon from '../../assets/user.svg';
import { newsFeedCollection } from '../../firebase';
import { getFormattedDate } from '../../utils/date';
import * as S from './Write.styled';

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.user.user);
  const titleRef = useRef();
  const contentRef = useRef();

  /**
   * 뉴스피드 추가하기
   */
  const createNewsFeedArticle = async () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const currentDate = new Date();
    const formattedDate = getFormattedDate(currentDate);
    const newContents = {
      name: authUser.displayName,
      title: title,
      content: content,
      date: formattedDate,
      pic: userIcon,
      isEditing: false,
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
          <S.Button onClick={createNewsFeedArticle}>작성 완료</S.Button>
        </S.WriteBox>
      </S.Box>
    </>
  );
};

export default Write;
