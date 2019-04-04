import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'
import theme from './theme'
import store from './redux/store'
import App from './App'

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    color: ${props => props.theme['color-gray--dark']};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 8px;
    @media (min-width: 768px) {
      font-size: 9px;
    }
    @media (min-width: 1024px) {
      font-size: 10px;
    }
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <GlobalStyle />
      <App />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
