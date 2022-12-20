import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Router />
        <GlobalStyle />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
