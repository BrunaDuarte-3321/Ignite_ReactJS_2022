import { Check, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import {
  BoxTaskContainer,
  ContentContainer,
  TasksContainer,
  TrashContainer,
} from './styles'

interface PropsCreatetasks {
  task: string
  deletContentTask: (contentDelet: string) => void
  handleAccountFinished: (finished: boolean) => void
}

export const Task = ({
  task,
  deletContentTask,
  handleAccountFinished,
}: PropsCreatetasks) => {
  const [finish, setFinish] = useState<boolean>(false)

  const handleDeletTask = () => {
    console.log('cliquei')
    deletContentTask(task)
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
          {task}
        </ContentContainer>
      </BoxTaskContainer>
      <TrashContainer>
        <Trash size={17.45} onClick={handleDeletTask} />
      </TrashContainer>
    </TasksContainer>
  )
}
