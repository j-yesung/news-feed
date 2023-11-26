import { addDoc, getDocs } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment, deleteComment, editComment, setComment, updateComment } from 'redux/modules/comment';
import styled from 'styled-components';
import { getFormattedDate } from 'utils/date';
import { commentCollection, deletingComment, updatingComment } from '../../firebase';

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

  // 조회 => 여기서 또 조회하는 이유는 새로고침 때문이다
  useEffect(() => {
    const getComments = async () => {
      const querySnapshot = await getDocs(commentCollection);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      dispatch(setComment(data));
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
    <CommentBox>
      <TitleBox>
        <CommentTitle>댓글 목록</CommentTitle> <div>- {commentData.length}개의 댓글</div>
      </TitleBox>
      <div>
        <CommentInput ref={commentRef} type="text" placeholder="댓글을 입력하세요" />
        <CommentBtn onClick={createComment}>댓글 작성</CommentBtn>
      </div>
      {commentData && (
        <>
          {commentData.map(
            comment =>
              comment.seq === FIND_CONTENT_SEQUENCE.seq && (
                <ul key={comment.id}>
                  <CommentBundle>
                    <AvatarPic src={comment.pic} alt="사진" />
                    <NameDate>
                      <p>{comment.name}</p>
                      <CommentDate>{comment.date}</CommentDate>
                    </NameDate>
                  </CommentBundle>
                  {comment.isEditing ? (
                    <div>
                      <textarea ref={editCommentRef} defaultValue={comment.comment}></textarea>
                      <button onClick={() => handleUpdateComment(comment)}>저장</button>
                    </div>
                  ) : (
                    <div>
                      <CommentText>{comment.comment}</CommentText>
                      <button onClick={() => dispatch(handleEditToggle(comment.id))}>수정</button>
                      <button onClick={() => dispatch(handleDeleteComment(comment.id))}>삭제</button>
                    </div>
                  )}
                </ul>
              ),
          )}
        </>
      )}
    </CommentBox>
  );
};

export default Comment;

const CommentBox = styled.div`
  background-color: lavenderblush;
  width: 100%;
  height: 448px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CommentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 10px;
`;

const TitleBox = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
  align-items: center;
  margin: 8px 0 10px;
`;

const CommentInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 18px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1.1rem;
  border-radius: 5px;
  &::placeholder {
    color: #ccc;
  }
`;

const CommentBtn = styled.button`
  border: none;
  background-color: #f4eba5;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: #a5c7bb;
  }
`;
const AvatarPic = styled.img`
  width: 50px;
  margin-left: 20px;
`;
const NameDate = styled.div`
  background-color: lemonchiffon;
  padding: 10px;
  width: 100%;

  margin-left: 20px;
  p {
    &:first-child {
      font-weight: bold;
    }
  }
`;

const CommentBundle = styled.li`
  background-color: darkred;
  display: flex;
  line-height: 1.5rem;
  margin-bottom: 5px;
`;

const CommentDate = styled.p`
  font-size: 1rem;
`;

const CommentText = styled.p`
  padding: 10px 20px;
  line-height: 1.5rem;
`;
