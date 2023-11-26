import React, { useRef, useState } from 'react';
import FileUpload from 'components/upload/FileUpload';
import { useSelector } from 'react-redux';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const authUser = useSelector(state => state.user.user);
  const contentsData = useSelector(state => state.contents.contents);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const myContents = contentsData.filter(contents => contents.email === authUser.email);
  const nameRef = useRef();
  const navigate = useNavigate();

  // 닉네임 변경
  const onNameChange = () => {
    updateProfile(authUser, { displayName: nameRef.current.value })
      .then(() => setIsNameEditing(!isNameEditing))
      .catch(error => console.error('공습 경보!', error));
  };

  return authUser ? (
    <>
      <div>Profile</div>
      {/* FileUpload : 파일 업로드 컴포넌트 */}
      <FileUpload />
      <p>이메일 : {authUser?.email}</p>
      {authUser && (
        <>
          <div>
            {isNameEditing ? (
              <input
                ref={nameRef}
                type="text"
                maxLength="10"
                placeholder="10자 이내로 입력해 주세요."
                defaultValue={authUser.displayName}
              />
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
      {authUser &&
        myContents.map(contents => (
          <div
            key={contents.id}
            onClick={() => navigate(`/content/${contents.id}`)}
            style={{
              border: '1px solid #292929',
              padding: '10px',
              margin: '10px',
              cursor: 'pointer',
            }}>
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
