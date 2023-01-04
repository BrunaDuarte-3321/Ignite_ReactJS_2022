import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'

export const App = () => {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <Transactions />
        <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  )
}

export default App
