import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import App from './containers/App'
import { GlobalStyle, theme } from './styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
