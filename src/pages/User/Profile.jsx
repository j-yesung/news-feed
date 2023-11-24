import React, { useRef, useState } from 'react';
import FileUpload from 'components/upload/FileUpload';
import { useSelector } from 'react-redux';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const authUser = useSelector(state => state.user.user);
  const contentsData = useSelector(state => state.contents.contents);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const myContents = contentsData.filter(contents => contents.name === authUser.displayName);
  const nameRef = useRef();

  // 닉네임 변경
  const onNameChange = () => {
    updateProfile(authUser, { displayName: nameRef.current.value })
      .then(() => setIsNameEditing(!isNameEditing))
      .catch(error => console.error('공습 경보!', error));
  };

  console.log('🚀 유저 정보', authUser);

  return authUser ? (
    <>
      <div>Profile</div>
      <FileUpload />
      <p>이메일 : {authUser?.email}</p>
      {authUser && (
        <>
          <div>
            {isNameEditing ? (
              <input ref={nameRef} type="text" defaultValue={authUser.displayName} />
            ) : (
              <p>{authUser.displayName}</p>
            )}
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
      {authUser &&
        myContents.map(contents => (
          <div key={contents.id}>
            <div>제목 : {contents.title}</div>
            <div>내용 : {contents.content}</div>
            <div>날짜 : {contents.date}</div>
            <br />
          </div>
        ))}
    </>
  ) : null;
};

export default Profile;
