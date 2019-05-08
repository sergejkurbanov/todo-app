import { createGlobalStyle } from 'styled-components'

export const theme = {
  'color-primary': '#02B8FA',
  'color-primary--dark': '#055877',
  'color-secondary': '#FF2C00',
  'color-gray': 'gray',
  'color-gray--dark': '#3b4548',
  'color-gray--light': '#F8FBFC',
  'color-white': '#FFFFFF',
  'color-black': '#000000',

  'border-radius': '0.3rem',

  'screen-xs': '576px',
  'screen-sm': '768px',
  'screen-md': '992px',
  'screen-lg': '1200px',

  get 'box-shadow'() {
    return `0 0 2px 0 ${this['color-gray']}`
  },
  get 'box-shadow--strong'() {
    return `0 0 8px 0 ${this['color-gray']}`
  },
  get 'box-shadow--hover'() {
    return `0 0 2px 0 ${this['color-gray--dark']}`
  },
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

    a {
      color: inherit;
    }
    a:hover {
      color: ${props => props.theme['color-gray--dark']};
    }
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`

export const icons = {
  trash:
    'M128 320v640c0 35.2 28.8 64 64 64h576c35.2 0 64-28.8 64-64v-640h-704zM320 896h-64v-448h64v448zM448 896h-64v-448h64v448zM576 896h-64v-448h64v448zM704 896h-64v-448h64v448zM848 128h-208v-80c0-26.4-21.6-48-48-48h-224c-26.4 0-48 21.6-48 48v80h-208c-26.4 0-48 21.6-48 48v80h832v-80c0-26.4-21.6-48-48-48zM576 128h-192v-63.198h192v63.198z',
  logout:
    'M768 640v-128h-320v-128h320v-128l192 192zM704 576v256h-320v192l-384-192v-832h704v320h-64v-256h-512l256 128v576h256v-192z',
}
