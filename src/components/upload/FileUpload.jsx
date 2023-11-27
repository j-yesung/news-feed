import { updateProfile } from 'firebase/auth';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import userIcon from '../../assets/user.svg';
import { auth, storage } from '../../firebase';

const FileUpload = () => {
  const authUser = useSelector(state => state.user.user);
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(authUser ? authUser.photoURL : userIcon);

  const handleFileSelect = event => {
    // 폴더 열리고 취소 클릭 시
    if (event.target.files.length === 0) return;
    handleUpload(event.target.files[0]);
  };

  const handleUpload = async file => {
    const imageRef = ref(storage, `${auth.currentUser.uid}/${file.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);

    // 프로필 사진 업데이트
    updateProfile(authUser, { photoURL: imageUrl })
      .then(() => setDownloadURL(imageUrl))
      .catch(error => console.error('공습 경보!', error));
  };

  const onClearImage = async () => {
    if (window.confirm('이미지를 삭제하시겠습니까?')) {
      setDownloadURL(userIcon);
      inputRef.current.value = null;

      const imageRef = ref(storage, downloadURL);

      try {
        await deleteObject(imageRef);
        updateProfile(authUser, { photoURL: userIcon })
          .then(() => console.log('프로필 이미지가 제거되었습니다.'))
          .catch(error => console.error('프로필 이미지를 제거 실패했습니다.', error));
      } catch (error) {
        console.error('공습 경보!', error);
      }
    }
  };

  return (
    <>
      <ProfileImgBox>
        <ProfileImgFrame>
          <ProfileImg src={downloadURL} />
        </ProfileImgFrame>
        <UploadBtn onClick={() => inputRef.current.click()}>업로드</UploadBtn>
        <input ref={inputRef} onChange={handleFileSelect} type="file" style={{ display: 'none' }} />
        <DeleteBtn onClick={() => onClearImage(downloadURL)}>이미지 제거</DeleteBtn>
      </ProfileImgBox>
    </>
  );
};

export default FileUpload;

const UploadBtn = styled.button`
  background-color: #f4eba5;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;

  width: 70%;
  border-radius: 5px;
  margin: 10px 0 0px;
  &:hover {
    background-color: #a5c7bb;
  }
`;

const DeleteBtn = styled.button`
  background-color: #f4eba5;
  border: none;
  width: 70%;
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    background-color: #a5c7bb;
  }
`;

export const ProfileImgFrame = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 20px;
  width: 150px;
  height: 150px;
  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 935px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 935px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  text-align: center;

  box-shadow: 3px 3px 10px #aaa;
  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 935px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 935px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileImgBox = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-right: 2px solid #eee;
  @media (max-width: 1024px) {
    width: 250px;
  }

  @media (max-width: 935px) {
    border-right: none;
    width: 100%;
  }
`;

const Upload = styled.input`
  background-color: #fff;
  width: 70%;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0 10px;

  @media (max-width: 935px) {
    margin: 25px 0 10px;
  }
`;
