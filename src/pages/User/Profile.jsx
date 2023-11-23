import FileUpload from 'components/upload/FileUpload';
import { auth } from '../../firebase';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // 유저 정보 가져오기
    const subscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <>
      <div>Profile</div>
      <FileUpload />
      {user && (
        <div>
          <p>닉네임 : {user.displayName}</p>
          <p>이메일 : {user.email}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
