import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../styles/themes/default"
import { Header } from "../Header"

const setup = () => {
  const view = render(
    <ThemeProvider theme={defaultTheme}>
      <Header/>
    </ThemeProvider>
  )
  return {
    ...view
  }
}


describe('Button Component', () => {
  
})