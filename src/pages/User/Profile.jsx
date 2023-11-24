import React, { useEffect, useRef, useState } from 'react';
import FileUpload from 'components/upload/FileUpload';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const navigator = useNavigate();
  const authUser = useSelector(state => state.user.user);
  const contentsData = useSelector(state => state.contents.contents);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const nameRef = useRef();

  useEffect(() => {
    if (!authUser) {
      navigator('/');
    }
  }, [authUser, navigator]);

  if (!authUser) return alert('로그인이 필요합니다.'); // TODO: 이거 문제 있음
  const myContents = contentsData.filter(contents => contents.name === authUser.displayName);

  // 닉네임 변경
  const onNameChange = () => {
    updateProfile(authUser, {
      displayName: nameRef.current.value,
    })
      .then(() => {
        setIsNameEditing(!isNameEditing);
      })
      .catch(error => {
        console.error('공습 경보!', error);
      });
  };

  console.log(isNameEditing);
  console.log('🚀 유저 정보', authUser);

  return (
    <>
      <div>Profile</div>
      <FileUpload />
      {authUser && (
        <>
          <div>
            {isNameEditing ? (
              <input ref={nameRef} type="text" defaultValue={authUser.displayName} />
            ) : (
              <p>{authUser.displayName}</p>
            )}
            <p>이메일 : {authUser.email}</p>
          </div>
          {isNameEditing ? (
            <button onClick={onNameChange}>저장</button>
          ) : (
            <button onClick={() => setIsNameEditing(true)}>닉네임 변경</button>
          )}
          <br />
        </>
      )}
      {/* 자기가 작성한 게시글 보여주기 */}
      {myContents.map(contents => (
        <div key={contents.id}>
          <div>제목 : {contents.title}</div>
          <div>내용 : {contents.content}</div>
          <div>날짜 : {contents.date}</div>
          <br />
        </div>
      ))}
    </>
  );
};

export default Profile;
