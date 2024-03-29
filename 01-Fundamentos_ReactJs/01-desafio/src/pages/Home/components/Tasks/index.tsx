import { Check, Circle, Pen, Trash } from 'phosphor-react'
import {
  BoxTaskContainer,
  ContentContainer,
  HeaderIconEdit,
  HeaderTaskContainer,
  HeaderTaskIconCircle,
  TasksContainer,
  TrashContainer,
} from './styles'
import { ITask } from '../../../../interfaces'

interface PropsCreatetasks {
  task: ITask
  deleteContentTask: (contentDelet: number) => void
  handleEditeTask: (id: number, newTask: string) => void
  handleAccountFinished: (id: number) => void
}

export const Task = ({
  task,
  deleteContentTask,
  handleAccountFinished,
  handleEditeTask,
}: PropsCreatetasks) => {
  const handleDeleteTask = (id: number) => {
    deleteContentTask(id)
  }

  console.log(task, 'tas do componente task')
  return (
    <TasksContainer>
      <BoxTaskContainer>
        <HeaderTaskContainer>
          <HeaderTaskIconCircle>
            {!task.done ? (
              <Circle
                size={17.45}
                onClick={() => handleAccountFinished(task.id)}
              />
            ) : (
              <div className="finished">
                <Check
                  size={17.45}
                  onClick={() => handleAccountFinished(task.id)}
                />
              </div>
            )}
            <ContentContainer
              className={`${task.done ? 'finishedTask' : null} `}
            >
              {task.text}
            </ContentContainer>
          </HeaderTaskIconCircle>

          <HeaderIconEdit>
            <TrashContainer>
              <Pen
                size={17.45}
                onClick={() => handleEditeTask(task.id, task.text)}
              />
            </TrashContainer>
            <TrashContainer>
              <Trash size={17.45} onClick={() => handleDeleteTask(task.id)} />
            </TrashContainer>
          </HeaderIconEdit>
        </HeaderTaskContainer>
      </BoxTaskContainer>
    </TasksContainer>
  )
}
