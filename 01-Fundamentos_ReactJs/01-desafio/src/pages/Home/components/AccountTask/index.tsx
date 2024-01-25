import { ITask } from '../../../../interfaces'
import { AccountContainer, HeaderTasksContainer } from './styles'

interface Props {
  tasks: ITask[]
}
export const HeaderTasks = ({ tasks }: Props) => {
  const teste = tasks.filter((task) => {
    return task.done
  })
  return (
    <HeaderTasksContainer>
      <AccountContainer variant="blue">
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
      </AccountContainer>
      <AccountContainer variant="purple">
        <p>
          Concluídas 
          <span>
            {teste.length} de {tasks.length}
          </span>
        </p>
      </AccountContainer>
    </HeaderTasksContainer>
  )
}
