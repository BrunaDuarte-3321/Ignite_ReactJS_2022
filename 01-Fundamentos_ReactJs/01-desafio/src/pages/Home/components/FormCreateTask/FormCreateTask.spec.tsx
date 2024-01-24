import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { } from 'react'
import { ThemeProvider } from "styled-components"
import { FormCreateTask } from "."
import { defaultTheme } from "../../../../styles/themes/default"

describe('test form create', () => {
  
  it(' should have button create task', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <FormCreateTask/>
      </ThemeProvider>
    )
    expect(screen.getByText('Criar')).toBeDefined()
    
  })

  it('should create task' , () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <FormCreateTask/>
      </ThemeProvider>
    )

    const input = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const button = screen.getByRole('button', {name: 'Criar'})

    userEvent.type(input, 'Nova tarefa');
    userEvent.click(button);
  })
})