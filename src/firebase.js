import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const newsFeedCollection = collection(db, 'news-feed');
export const commentCollection = collection(db, 'comments');
export const storage = getStorage(app);

// 뉴스피드 수정
export const updateNewsFeed = async (id, updateData) => {
  try {
    const docRef = doc(db, 'news-feed', id);
    await updateDoc(docRef, updateData);
  } catch (e) {
    console.error(e);
  }
};

// 뉴스피드 삭제
export const deleteNewsFeed = async id => {
  try {
    await deleteDoc(doc(db, 'news-feed', id));
  } catch (e) {
    console.error(e);
  }
};

// 댓글 수정
export const updatingComment = async (id, updateData) => {
  try {
    const docRef = doc(db, 'comments', id);
    await updateDoc(docRef, updateData);
  } catch (e) {
    console.error(e);
  }
};

// 댓글 삭제
export const deletingComment = async id => {
  try {
    await deleteDoc(doc(db, 'comments', id));
  } catch (e) {
    console.error(e);
  }
};
