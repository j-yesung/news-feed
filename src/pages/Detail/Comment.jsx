import { addDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment, deleteComment, editComment, setComment, updateComment } from 'redux/modules/comment';
import { getFormattedDate } from 'utils/date';
import { commentCollection, deletingComment, updatingComment } from '../../firebase';
import * as S from './Comment.styled';

const Comment = () => {
  const contentsData = useSelector(state => state.contents.contents);
  const commentData = useSelector(state => state.comment.comments);
  const authUser = useSelector(state => state.user.user);
  const params = useParams();
  const commentRef = useRef();
  const editCommentRef = useRef();
  const dispatch = useDispatch();

  // SEQUENCE
  const FIND_CONTENT_SEQUENCE = contentsData.find(contents => contents.id === params.id);
  const CURRENT_COMMENT_NUM = commentData.filter(comments => comments.seq === FIND_CONTENT_SEQUENCE.seq && comments);

  useEffect(() => {
    const getComments = async () => {
      try {
        const q = query(commentCollection, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const commentList = [];
        querySnapshot.forEach(doc => {
          commentList.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setComment(commentList));
      } catch (e) {
        console.error(e);
        return [];
      }
    };
    getComments();
  }, [dispatch]);

  // 댓글 작성 버튼 누르면 실행합니다.
  const createComment = async () => {
    const comment = commentRef.current.value;
    if (!comment) return alert('댓글을 입력해 주세요.');

    const newComment = {
      seq: FIND_CONTENT_SEQUENCE.seq,
      name: authUser.displayName,
      comment: comment,
      date: getFormattedDate(new Date()),
      pic: authUser.photoURL,
      isEditing: false,
    };

    const docs = await addDoc(commentCollection, newComment);
    dispatch(addComment({ id: docs.id, ...newComment }));

    commentRef.current.value = '';
  };

  // 수정 토글
  const handleEditToggle = id => dispatch(editComment(id));
  // 수정 완료
  const handleUpdateComment = async updateData => {
    const updates = { comment: editCommentRef.current.value, isEditing: false };
    await updatingComment(updateData.id, updates);
    dispatch(updateComment(updateData.id, updates));
  };

  // 삭제
  const handleDeleteComment = async id => {
    await deletingComment(id);
    dispatch(deleteComment(id));
  };

  return (
    <S.CommentBox>
      <S.TitleBox>
        <S.CommentTitle>댓글 목록</S.CommentTitle> <div>- {CURRENT_COMMENT_NUM.length}개의 댓글</div>
      </S.TitleBox>
      <S.CommentWriteBox>
        <S.CommentInput ref={commentRef} type="text" placeholder="댓글을 입력하세요" />
        <S.CommentBtn onClick={createComment}>댓글 작성</S.CommentBtn>
      </S.CommentWriteBox>
      {commentData && (
        <>
          {commentData.map(
            comment =>
              comment.seq === FIND_CONTENT_SEQUENCE.seq && (
                <S.CommentBg key={comment.id}>
                  <S.CommentBundle>
                    <S.AvatarFrame>
                      <S.AvatarPic src={comment.pic} alt="사진" />
                    </S.AvatarFrame>
                    <S.NameDate>
                      <p>{comment.name}</p>
                      <S.CommentDate>{comment.date}</S.CommentDate>
                    </S.NameDate>
                  </S.CommentBundle>
                  {comment.isEditing ? (
                    <div>
                      <S.CommentTextarea ref={editCommentRef} defaultValue={comment.comment}></S.CommentTextarea>
                      <S.CommentFinishBox>
                        <S.CommentFinishButton onClick={() => handleUpdateComment(comment)}>저장</S.CommentFinishButton>
                      </S.CommentFinishBox>
                    </div>
                  ) : (
                    <div>
                      <S.CommentText>{comment.comment}</S.CommentText>
                      <S.ModifyDeleteButtons>
                        <S.CommentModifyButton onClick={() => handleEditToggle(comment.id)}>수정</S.CommentModifyButton>
                        <S.CommentDeleteButton onClick={() => handleDeleteComment(comment.id)}>
                          삭제
                        </S.CommentDeleteButton>
                      </S.ModifyDeleteButtons>
                    </div>
                  )}
                </S.CommentBg>
              ),
          )}
        </>
      )}
    </S.CommentBox>
  );
};

export default Comment;
