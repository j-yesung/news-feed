import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme } from 'styles/theme';
import Router from './shared/Router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, newsFeedCollection } from './firebase';
import { setUser } from 'redux/modules/user';
import { getDocs, orderBy, query } from 'firebase/firestore';
import { setContents } from 'redux/modules/content';

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.themeReducer.isMode);

  useEffect(() => {
    const getNewsFeed = async () => {
      try {
        const q = query(newsFeedCollection, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const newsFeedList = [];
        querySnapshot.forEach(doc => {
          newsFeedList.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setContents(newsFeedList));
      } catch (e) {
        console.error(e);
        return [];
      }
    };
    getNewsFeed();

    // 사용자 정보 불러오기
    const subscribe = onAuthStateChanged(auth, user => {
      dispatch(setUser(user));
    });

    return () => {
      subscribe();
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode || lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
