import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import userIcon from '../../assets/user.svg';
import { auth, storage } from '../../firebase';

const FileUpload = () => {
  const authUser = useSelector(state => state.user.user);
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(authUser ? authUser.photoURL : userIcon);

  const handleFileSelect = event => setSelectedFile(event.target.files[0]);

  const handleUpload = async () => {
    if (!selectedFile) return alert('파일을 업로드 해주세요.');
    const imageRef = ref(storage, `${auth.currentUser.uid}/${selectedFile.name}`);
    await uploadBytes(imageRef, selectedFile);
    const imageUrl = await getDownloadURL(imageRef);

    // 프로필 사진 업데이트
    updateProfile(authUser, { photoURL: imageUrl })
      .then(() => setDownloadURL(imageUrl))
      .catch(error => console.error('공습 경보!', error));
  };

  const onClearImage = () => {
    if (window.confirm('이미지를 삭제하시겠습니까?')) {
      setSelectedFile(null);
      setDownloadURL(userIcon);
      inputRef.current.value = null;
    }
  };

  return (
    <>
      <ProfileImgBox>
        {/*<h2>프로필 이미지 변경</h2>*/}
        <div>
          <ProfileImg src={downloadURL} width="50px" alt="사진 없음" />
        </div>
        <Upload ref={inputRef} type="file" onChange={handleFileSelect} />
        <UploadBtn onClick={handleUpload}>업로드</UploadBtn>
        <DeleteBtn onClick={onClearImage}>이미지 제거</DeleteBtn>
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
  margin: 10px 0;
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

const ProfileImg = styled.img`
  width: 150px;
  text-align: center;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: 3px 3px 10px #aaa;
`;

const ProfileImgBox = styled.div`
  background-color: #ddd;
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Upload = styled.input`
  background-color: #fff;
  width: 70%;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0 10px;
`;
