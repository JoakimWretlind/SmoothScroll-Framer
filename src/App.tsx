import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import { GlobalStyle } from './globalStyle';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';

function App() {
  return (
    <>
      <GlobalStyle />
      <SmoothScroll>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </SmoothScroll>
    </>
  );
}

export default App;
