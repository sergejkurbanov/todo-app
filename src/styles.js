import { createGlobalStyle } from 'styled-components'

export const theme = {
  'color-main--primary': '#02B8FA',
  'color-main--secondary': '#FF2C00',
  'color-gray': 'gray',
  'color-gray--dark': '#3b4548',
  'color-gray--light': '#F8FBFC',
  'color-white': '#FFFFFF',
  'color-black': '#000000',

  'border-radius': '0.3rem',

  'screen-xs': '480px',
  'screen-sm': '768px',
  'screen-md': '992px',
  'screen-lg': '1200px',
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    color: ${props => props.theme['color-black']};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`
