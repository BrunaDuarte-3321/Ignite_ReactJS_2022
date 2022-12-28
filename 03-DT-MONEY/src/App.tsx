import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <p>Hello World!</p>
      </div>
    </ThemeProvider>
  )
}

export default App
