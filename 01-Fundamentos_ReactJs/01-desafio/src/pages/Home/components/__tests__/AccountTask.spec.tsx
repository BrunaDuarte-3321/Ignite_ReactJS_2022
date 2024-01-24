import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../../../styles/themes/default"
import { HeaderTasks } from "../AccountTask"

const setup = () => {

  const tasks = [
    {
      id: 1,
      done: false,
      text: 'Estudar Javascript' 
    },
    {
      id: 2,
      done: true,
      text: 'Estudar Clean Code' 
    },
    {
      id: 3,
      done: true,
      text: 'Estudar CSS' 
    }
  ]
  const view = render(
    <ThemeProvider theme={defaultTheme}>
      <HeaderTasks tasks={tasks}/>
    </ThemeProvider>
  )
  return {
    ...view
  }
}
describe('AccountTask Component', () => {

    it('should have a AccountTask', () => {
      const {container} = setup()
      expect(container).toBeDefined()
    })

     

    it('correctly filters completed tasks', () => {

      const {container} = setup()
      //uso do class gerada pelo styled-component
      const text = container.querySelector('.sc-gswNZR.YBotd')
      expect(text!.textContent).toBe('Concluídas2 de 3');
    })
})