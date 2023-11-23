import FileUpload from 'components/upload/FileUpload';
import { auth } from '../../firebase';
import React from 'react';

// 프로필 페이지 컴포넌트
const Profile = () => {
  console.log('auth', auth);
  return (
    <>
      <div>Profile</div>
      <FileUpload />
    </>
  );
};

export default Profile;
