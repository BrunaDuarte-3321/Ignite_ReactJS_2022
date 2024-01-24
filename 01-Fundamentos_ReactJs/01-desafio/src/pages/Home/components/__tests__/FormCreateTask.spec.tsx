import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { } from 'react'
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../../../styles/themes/default"
import { FormCreateTask } from "../FormCreateTask"

const setup = () => {
  const view = render(
    <ThemeProvider theme={defaultTheme}>
      <FormCreateTask/>
    </ThemeProvider>
  )
  return {
    ...view
  }
}

describe('FormCreateTask Component', () => {

  it('should have a FormCreateTask', () => {
    const {container} = setup()
    expect(container).toBeDefined()
  })
  
  it('should have button create task', () => {
    
    const { getByRole } = setup()
    expect(getByRole('button', {name: 'Criar'})).toBeDefined()
  })

  it('should create task' , () => {

    setup()

    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const button = screen.getByRole('button', {name: 'Criar'})

    userEvent.type(input, 'Nova tarefa');
    userEvent.click(button);
  })

})