import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './redux/store'
import App from './containers/App'
import { GlobalStyle, theme } from './styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
