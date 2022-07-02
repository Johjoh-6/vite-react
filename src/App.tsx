import logo from './logo.svg';
import './App.css';
import Header from '@component/Header';
import Footer from '@component/Footer';
import Main from '@component/Main';

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* Color */
  --color-primary: hsl(222, 66%, 40%);
  --color-primary-hover: hsl(222, 66%, 50%);
  --color-secondary: hsl(298, 35%, 50%);
  --color-secondary-hover: hsl(298, 35%, 60%);
  --color-tertiary: hsl(36, 100%, 68%);

  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 0%);

  /* Font */
  --font-4-5: clamp(2rem, 2rem + 3vw, 4.5rem);
  --font-3-5: clamp(1.5rem, 1.5rem + 3vw, 3.5rem);
  --font-2: clamp(1rem, 1rem + 3vw, 2rem);
  --font-title: clamp(1.2rem, 1.2rem + 2vw, 24px);
  --font-sub-title: clamp(1rem, 1rem + 2vw, 20px);
  --font-text: clamp(.8rem, .8rem + 2vw, 16px);
  --font-small-text: clamp(.7rem, .7rem + 2vw, 14px);
}
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App;
