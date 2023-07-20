import { Check, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import {
  BoxTaskContainer,
  ContentContainer,
  TasksContainer,
  TrashContainer,
} from './styles'
import { ITasks } from '../../../reducers/taskList'

interface PropsCreatetasks {
  task: ITasks
  deletContentTask: (contentDelet: number) => void
  handleAccountFinished: (finished: boolean) => void
}

export const Task = ({
  task,
  deletContentTask,
  handleAccountFinished,
}: PropsCreatetasks) => {
  const [finish, setFinish] = useState<boolean>(false)

  const handleDeletTask = (id: number) => {
    console.log('cliquei')
    deletContentTask(id)
  }

  const validateTask = () => {
    handleAccountFinished(finish)

    !finish ? setFinish(true) : setFinish(false)
  }
  return (
    <TasksContainer>
      <BoxTaskContainer>
        {!finish ? (
          <Circle size={17.45} onClick={validateTask} />
        ) : (
          <div className="finished">
            <Check size={17} onClick={validateTask} />
          </div>
        )}
        <ContentContainer className={`${finish ? 'finishedTask' : null} `}>
          {task.title}
        </ContentContainer>
      </BoxTaskContainer>
      <TrashContainer>
        <Trash size={17.45} onClick={() => handleDeletTask(task.id)} />
      </TrashContainer>
    </TasksContainer>
  )
}
