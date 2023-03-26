import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { ContextPostProvider } from './contexts/PostContext'
import { Router } from './router'
import { StyleGlobal } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ContextPostProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Router />
        <StyleGlobal />
      </ThemeProvider>
    </ContextPostProvider>
  )
}
