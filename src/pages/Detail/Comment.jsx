import React, { useEffect, useRef } from 'react';
import { commentCollection, deletingComment, updatingComment } from '../../firebase';
import { addDoc, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment, editComment, setComment, updateComment } from 'redux/modules/comment';
import { getFormattedDate } from 'utils/date';

const Comment = () => {
  const commentData = useSelector(state => state.comment.comments);
  const authUser = useSelector(state => state.user.user);
  const commentRef = useRef();
  const editCommentRef = useRef();
  const dispatch = useDispatch();

  // FireStore DB에서 댓글을 조회한 데이터를 Redux에 저장합니다.
  useEffect(() => {
    const getComments = async () => {
      const querySnapshot = await getDocs(commentCollection);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      dispatch(setComment(data));
    };
    getComments();
    console.log('실행');
  }, [dispatch]);

  // 댓글 작성 버튼 누르면 실행합니다.
  const createComment = async () => {
    const comment = commentRef.current.value;
    if (!comment) return alert('댓글을 입력해주세요.');

    const newComment = {
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
  const handleUpdateComment = updateData => {
    const updates = { comment: editCommentRef.current.value, isEditing: false };
    try {
      updatingComment(updateData.id, updates);
      dispatch(updateComment(updateData.id, updates));
    } catch (e) {
      console.error('공습 경보!', e);
    }
  };

  // 삭제
  const handleDeleteComment = async id => {
    try {
      deletingComment(id);
      dispatch(deleteComment(id));
    } catch (e) {
      console.error('공습 경보!', e);
    }
  };

  return (
    <>
      <div>Comment</div>
      {/* <div>{commentData.length}개의 댓글</div> */}
      <div>
        <input ref={commentRef} type="text" placeholder="댓글을 입력하세요" />
        <button onClick={createComment}>댓글 작성</button>
      </div>
      {commentData && (
        <>
          {commentData.map(comment => (
            <ul key={comment.id}>
              <li>
                <img src={comment.pic} alt="사진" width="50px" />
                <span>{comment.name}</span>
                <span>{comment.date}</span>
              </li>
              {comment.isEditing ? (
                <div>
                  <textarea ref={editCommentRef} defaultValue={comment.comment}></textarea>
                  <button onClick={() => handleUpdateComment(comment)}>저장</button>
                </div>
              ) : (
                <div>
                  <p>{comment.comment}</p>
                  <button onClick={() => dispatch(handleEditToggle(comment.id))}>수정</button>
                  <button onClick={() => dispatch(handleDeleteComment(comment.id))}>삭제</button>
                </div>
              )}
            </ul>
          ))}
        </>
      )}
    </>
  );
};

export default Comment;
