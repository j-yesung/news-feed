import React, { useRef, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage, auth } from '../../firebase';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const inputRef = useRef();

  const handleFileSelect = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert('파일을 업로드 해주세요.');
    const imageRef = ref(storage, `${auth.currentUser.uid}/${selectedFile.name}`);
    await uploadBytes(imageRef, selectedFile);
    setDownloadURL(await getDownloadURL(imageRef));
  };

  const onClearImage = () => {
    if (window.confirm('이미지를 삭제하시겠습니까?')) {
      setSelectedFile(null);
      setDownloadURL(null);
      inputRef.current.value = null;
    }
  };

  return (
    <>
      <div>
        <h2>파일 업로드 컴포넌트</h2>
        <input ref={inputRef} type="file" onChange={handleFileSelect} />
        <button onClick={handleUpload}>업로드</button>
        <button onClick={onClearImage}>이미지 제거</button>
      </div>
      <div>
        <img src={downloadURL} width="50px" alt="사진 없음" />
      </div>
    </>
  );
};

export default FileUpload;
