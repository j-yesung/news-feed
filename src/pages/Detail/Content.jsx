import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteContents, editContents, updateContents } from 'redux/modules/content';
import { deleteNewsFeed, updateNewsFeed } from '../../firebase';
import Comment from './Comment';
import * as S from './Content.styled';

const Content = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contentsData = useSelector(state => state.contents.contents);
  const findData = contentsData.find(contents => contents.id === params.id);
  const authUser = useSelector(state => state.user.user);
  const titleRef = useRef();
  const contentRef = useRef();

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

  return (
    <div>
      {/* findData가 존재하면 아래 내용 호출 */}
      {findData && (
        <S.Box>
          <S.View>
            <S.AvatarName>
              <S.AvatarBox>
                <S.Avatar src={findData.pic} alt="사진" />
              </S.AvatarBox>
              <div>
                <S.Name>{findData.name}</S.Name>
                <S.Date>{findData.date}</S.Date>
              </div>
              {authUser?.displayName === findData.name ? (
                findData.isEditing ? (
                  <S.FinishBox>
                    <S.FinishBtn onClick={() => HandleUpdateNewsFeed(findData)}>수정 완료</S.FinishBtn>
                  </S.FinishBox>
                ) : (
                  <S.ModiDeleButtons>
                    <S.ModifyBtn onClick={() => HandleEditingToggle(findData.id)}>수정</S.ModifyBtn>
                    <S.DeleteBtn onClick={() => HandleDeleteNewsFeed(findData.id)}>삭제</S.DeleteBtn>
                  </S.ModiDeleButtons>
                )
              ) : null}
            </S.AvatarName>
            <S.ViewCommentBox>
              {findData.isEditing ? (
                <S.TitleTextarea key={findData.id}>
                  <S.InputTitle ref={titleRef} defaultValue={findData.title}></S.InputTitle>
                  <S.Textarea ref={contentRef} defaultValue={findData.content}></S.Textarea>
                </S.TitleTextarea>
              ) : (
                <div key={findData.id}>
                  <S.Title>{findData.title}</S.Title>
                  <S.Content>{findData.content}</S.Content>{' '}
                  <S.HashTag># {findData.category?.split(',').join(' # ')}</S.HashTag>
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
