import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'
import App from './App'
import { GlobalStyle, theme } from './styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <GlobalStyle />
      <App />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
