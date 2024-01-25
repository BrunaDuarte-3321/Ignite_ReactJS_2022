import { ThemeProvider } from 'styled-components'
import { Modal } from './components/Modal'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <Modal danger />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
