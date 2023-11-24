import React, { useEffect } from 'react';
import FileUpload from 'components/upload/FileUpload';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigator = useNavigate();
  const authUser = useSelector(state => state.user.user);
  const contentsData = useSelector(state => state.contents.contents);

  useEffect(() => {
    if (!authUser) {
      navigator('/');
    }
  }, [authUser, navigator]);

  if (!authUser) return alert('로그인이 필요합니다.');

  const myContents = contentsData.filter(contents => contents.name === authUser.displayName);

  console.log('🚀 닉네임', myContents);
  console.log('🚀 콘텐츠', contentsData);
  console.log('🚀 유저 정보', authUser);

  // updateProfile(auth.currentUser, {
  //   displayName: 'Jane Q. User',
  //   photoURL: 'https://example.com/jane-q-user/profile.jpg',
  // })
  //   .then(() => {
  //     // Profile updated!
  //     // ...
  //   })
  //   .catch(error => {
  //     // An error occurred
  //     // ...
  //   });

  return (
    <>
      <div>Profile</div>
      <FileUpload />
      {authUser && (
        <>
          <div>
            <p>닉네임 : {authUser.displayName}</p>
            <p>이메일 : {authUser.email}</p>
          </div>
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
