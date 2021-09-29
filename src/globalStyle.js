import { createGlobalStyle } from 'styled-components';
import YessicaReg from './assets/fonts/Yessica-Regular.otf';
import AltaL from './assets/fonts/Alta-light.otf';


export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'yessica-R';
  src: url(${YessicaReg});
}
@font-face {
  font-family: 'alta-L';
  src: url(${AltaL});
}

    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'poppins', sans-serif;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;