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
describe('Header Component', () => {

    it('should have a Header', () => {
      const {container} = setup()
      expect(container).toBeDefined()
    })

    it('should renders the logo', () => {
      const {findAllByRole} = setup()
      expect(findAllByRole('img')).toBeDefined()

    })
})