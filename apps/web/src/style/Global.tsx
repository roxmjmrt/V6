import { PancakeTheme } from '@pancakeswap/uikit'
import { createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
    border: none !important;
    outline: none !important;
  }

  html, body, #__next {
    height: 100%;
    border: none !important;
    outline: none !important;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    border: none !important;
    outline: none !important;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  #__next {
    position: relative;
    z-index: 1;
    border: none !important;
    outline: none !important;
  }

  #portal-root {
    position: relative;
    z-index: 2;
    border: none !important;
    outline: none !important;
  }
`

export default GlobalStyle
