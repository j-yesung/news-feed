const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'yg-jalnan';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  body {
    transition: all 0.3s;
    display: flex;
    background-color: ${({ theme }) => theme.bgColor};
    font-family: 'Pretendard-Regular';
  
  }

  input {
    font-family: inherit;
    padding: 0;
    margin: 0;
  }
  textarea {
    font-family: inherit;
    padding: 0;
    margin: 0;
  }
  button {
    font-family: inherit;
  }

  a{color:inherit;}
`;

export default GlobalStyle;
