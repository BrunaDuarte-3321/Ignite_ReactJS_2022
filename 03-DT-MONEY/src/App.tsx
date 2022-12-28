import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
