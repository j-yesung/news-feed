import FileUpload from 'components/upload/FileUpload';
import { updateProfile } from 'firebase/auth';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Profile.styled';
const Profile = () => {
  const authUser = useSelector(state => state.user.user);
  const contentsData = useSelector(state => state.contents.contents);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const myContents = contentsData.filter(contents => contents.name === authUser.displayName);
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
      <div>마이페이지</div>
      {/* FileUpload : 파일 업로드 컴포넌트 */}
      <S.ProfileBox>
        <FileUpload />
        <S.ProfileTop>
          <S.MyEmail>이메일 : {authUser?.email}</S.MyEmail>
          {authUser && (
            <S.ProfileName>
              {isNameEditing ? (
                <S.ChangeInput ref={nameRef} type="text" defaultValue={authUser.displayName} />
              ) : (
                <S.NowNickName>{authUser.displayName}</S.NowNickName>
              )}

              {isNameEditing ? (
                <S.SaveBtn onClick={onNameChange}>저장</S.SaveBtn>
              ) : (
                <S.ChangeName onClick={() => setIsNameEditing(true)}>닉네임 변경</S.ChangeName>
              )}
            </S.ProfileName>
          )}
        </S.ProfileTop>
      </S.ProfileBox>
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
            <div>날짜 : {contents.date}</div>
            <div>제목 : {contents.title}</div>
            <div>내용 : {contents.content}</div>
            <br />
          </div>
        ))}
    </>
  ) : null;
};

export default Profile;
