import React, { useEffect, useRef } from 'react';
import { commentCollection, deletingComment, updatingComment } from '../../firebase';
import { addDoc, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment, editComment, setComment, updateComment } from 'redux/modules/comment';
import { getFormattedDate } from 'utils/date';
import { useParams } from 'react-router-dom';

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
    <>
      <div>Comment</div>
      <br />
      <div>{commentData.length}개의 댓글</div>
      <div>
        <input ref={commentRef} type="text" placeholder="댓글을 입력하세요" />
        <button onClick={createComment}>댓글 작성</button>
      </div>

      {commentData && (
        <>
          {commentData.map(
            comment =>
              comment.seq === FIND_CONTENT_SEQUENCE.seq && (
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
              ),
          )}
        </>
      )}
    </>
  );
};

export default Comment;
