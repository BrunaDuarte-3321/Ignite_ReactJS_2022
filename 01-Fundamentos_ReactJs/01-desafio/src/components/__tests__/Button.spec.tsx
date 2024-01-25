import { render } from "@testing-library/react"
import { PlusCircle } from "phosphor-react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../styles/themes/default"
import Button from "../Button"

const setup = () => {

  const title = 'Criar tarefa'
  const icon = <PlusCircle/>
  const view = render(
    
    <ThemeProvider theme={defaultTheme}>
      <Button title={title} icon={icon}/>
    </ThemeProvider>
  )
  return {
    ...view
  }
}


describe('Button Component', () => {

  it('should renders without crashing', () => {
    const {container} = setup()
    expect(container).toBeDefined()
  })

  it('should renders title and icon', () => {
    const {getByText, container
    } = setup()

    expect(getByText('Criar tarefa')).toBeDefined()

    const iconElement = container.querySelector('.phosphor-react-icon')
    expect(iconElement).toBeDefined()
  })
})