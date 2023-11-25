import { getDocs } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteContents, editContents, setContents, updateContents } from 'redux/modules/content';
import { deleteNewsFeed, newsFeedCollection, updateNewsFeed } from '../../firebase';
import Comment from './Comment';
import * as S from './Content.styled';

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

    await updateNewsFeed(updateData.id, updates);
    dispatch(updateContents(updateData.id, updates));
  };

  // 삭제
  const HandleDeleteNewsFeed = async id => {
    await deleteNewsFeed(id);
    dispatch(deleteContents(id));
    navigate('/');
  };

  const authUser = useSelector(state => state.user.user);

  console.log('얍얍', findData.name);
  console.log('얍222222', authUser.displayName);
  return (
    <div>
      {/* findData가 존재하면 아래 내용 호출 */}
      {findData && (
        <S.Box>
          <S.View>
            <S.AvatarName>
              <S.Avatar src={findData.pic} alt="사진" />
              <div>
                <S.Name>{findData.name}</S.Name>
                <S.Date>{findData.date}</S.Date>
              </div>
              {authUser.displayName === findData.name ? (
                findData.isEditing ? (
                  <button onClick={() => HandleUpdateNewsFeed(findData)}>수정 완료</button>
                ) : (
                  <>
                    <S.ModifyBtn onClick={() => HandleEditingToggle(findData.id)}>수정</S.ModifyBtn>
                    <S.DeleteBtn onClick={() => HandleDeleteNewsFeed(findData.id)}>삭제</S.DeleteBtn>
                  </>
                )
              ) : null}
            </S.AvatarName>
            <S.ViewCommentBox>
              {findData.isEditing ? (
                <div key={findData.id}>
                  <S.InputTitle ref={titleRef} defaultValue={findData.title}></S.InputTitle>
                  <S.Textarea ref={contentRef} defaultValue={findData.content}></S.Textarea>
                </div>
              ) : (
                <div key={findData.id}>
                  <S.Title>{findData.title}</S.Title>
                  <S.Content>{findData.content}</S.Content>
                </div>
              )}
              <Comment />
            </S.ViewCommentBox>
          </S.View>
        </S.Box>
      )}
    </div>
  );
};

export default Content;
