import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../styles/themes/default"
import { Input } from "../Input"

const setup = () => {
  const view = render(
    <ThemeProvider theme={defaultTheme}>
      <Input  />
    </ThemeProvider>
  )
  return {
    ...view
  }
}

describe('Input Component', () => {

  it('should renders without crashing', () => {
    const {container} = setup()
    expect(container).toBeDefined()
  })

  it('should applies default input properties', () => {
    const { container } = setup()
    const inputElement = container.querySelector('input')
    expect(inputElement).toBeDefined()
    expect(inputElement).toHaveProperty('type', 'text')
  });
})