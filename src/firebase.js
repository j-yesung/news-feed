import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore';

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

// 뉴스피드 수정
export const updateNewFeed = async (id, updateData) => {
  console.log('🚀 ~ file: firebase.js:23 ~ updateNewFeed ~ id, updateData:', id, updateData);
  try {
    const docRef = doc(db, 'news-feed', id);
    updateDoc(docRef, updateData);
  } catch (e) {
    console.error(e);
  }
};

// 뉴스피드 삭제
export const deleteNewsFeed = async id => {
  console.log('id: ', id);
  try {
    await deleteDoc(doc(db, 'news-feed', id));
    console.log('삭제 완료');
  } catch (e) {
    console.error(e);
  }
};
