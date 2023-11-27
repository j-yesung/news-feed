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
  const myContents = contentsData.filter(contents => contents?.email === authUser?.email);
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
      {/* FileUpload : 파일 업로드 컴포넌트 */}
      <S.ProfileBox>
        <FileUpload />
        <S.ProfileTop>
          <S.MyEmail>이메일 : {authUser?.email}</S.MyEmail>
          {authUser && (
            <S.ProfileName>
              {isNameEditing ? (
                <S.ChangeInput
                  ref={nameRef}
                  type="text"
                  maxLength="10"
                  placeholder="10자 이내로 입력해 주세요."
                  defaultValue={authUser.displayName}
                />
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
      <S.BulletinBox>
        <S.MyBulletin>{authUser.displayName}의 게시글</S.MyBulletin>
        {authUser &&
          myContents.map(contents => (
            <S.Bulletin key={contents.id} onClick={() => navigate(`/content/${contents.id}`)}>
              <S.Title>제목 : {contents.title}</S.Title>
              <S.Contents>{contents.content}</S.Contents>
              <S.Date>날짜 : {contents.date}</S.Date>
            </S.Bulletin>
          ))}
      </S.BulletinBox>
    </>
  ) : null;
};

export default Profile;
