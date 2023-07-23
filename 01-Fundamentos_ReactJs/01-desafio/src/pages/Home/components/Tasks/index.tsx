import { Check, Circle, Trash } from 'phosphor-react'
import {
  BoxTaskContainer,
  ContentContainer,
  TasksContainer,
  TrashContainer,
} from './styles'
import { ITask } from '../../../../interfaces'

interface PropsCreatetasks {
  task: ITask
  deleteContentTask: (contentDelet: number) => void
  handleAccountFinished: (id: number) => void
}

export const Task = ({
  task,
  deleteContentTask,
  handleAccountFinished,
}: PropsCreatetasks) => {
  const handleDeleteTask = (id: number) => {
    deleteContentTask(id)
  }

  console.log(task, 'tas do componente task')
  return (
    <TasksContainer>
      <BoxTaskContainer>
        {!task.done ? (
          <Circle size={17.45} onClick={() => handleAccountFinished(task.id)} />
        ) : (
          <div className="finished">
            <Check size={17} onClick={() => handleAccountFinished(task.id)} />
          </div>
        )}

        <ContentContainer className={`${task.done ? 'finishedTask' : null} `}>
          {task.text}
        </ContentContainer>
      </BoxTaskContainer>
      <TrashContainer>
        <Trash size={17.45} onClick={() => handleDeleteTask(task.id)} />
      </TrashContainer>
    </TasksContainer>
  )
}
