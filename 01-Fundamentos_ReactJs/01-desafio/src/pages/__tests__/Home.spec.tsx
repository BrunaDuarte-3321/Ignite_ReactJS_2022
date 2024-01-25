import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../styles/themes/default"
import { Home } from "../Home"

const setup = () => {
  const view = render(
    <ThemeProvider theme={defaultTheme}>
      <Home/>
    </ThemeProvider>
  )
  return {
    ...view
  }
}
describe('Home Page', () => {

  it('should have a page Home', () => {
    const {container} = setup()
      expect(container).toBeDefined()
  })
})