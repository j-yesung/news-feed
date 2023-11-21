const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'yg-jalnan';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  body {
    display: flex;
    
  }
`;

export default GlobalStyle;
