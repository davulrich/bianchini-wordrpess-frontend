import {createGlobalStyle} from 'styled-components'

import Montserrat from '../assets/fonts/Montserrat.woff2'
import Poppins from '../assets/fonts/Poppins-Bold.woff2'
import Questrial from '../assets/fonts/Questrial-Regular.woff2'

const styled = {createGlobalStyle}

const Typography = styled.createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('woff2');
    font-weight: 100;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('woff2');
    font-weight: 200;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('woff2');
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('woff2');
    font-weight: 600;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('woff2');
    font-weight: 700;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Questrial';
    src: url(${Questrial}) format('woff2');
    font-display: fallback;
  }
`

export default Typography
