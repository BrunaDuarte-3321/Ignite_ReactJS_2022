import { Check, Circle, Pen, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Modal } from '../../../../components/Modal'
import { ITask } from '../../../../interfaces'
import {
  BoxTaskContainer,
  ContentContainer,
  HeaderIconEdit,
  HeaderTaskContainer,
  HeaderTaskIconCircle,
  TasksContainer,
  TrashContainer,
} from './styles'

interface PropsCreateTasks {
  task: ITask
  deleteContentTask: (contentDelete: number) => void
  handleEditeTask: (id: number, newTask: string) => void
  handleAccountFinished: (id: number) => void
}

export const Task = ({
  task,
  deleteContentTask,
  handleAccountFinished,
  handleEditeTask,
}: PropsCreateTasks) => {
   const [isVisible, setIsVisible] = useState(false)

   const handleModel = () => {
    !isVisible ? setIsVisible(true) : setIsVisible(false)
   }
  const handleDeleteTask = (id: number) => {
    deleteContentTask(id)
    setIsVisible(false)
  }

  return (
    <TasksContainer>
      
      <BoxTaskContainer>
        <HeaderTaskContainer>
          <HeaderTaskIconCircle>
            {!task.done ? (
              <Circle
                alt='concluir'
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
              <Trash size={17.45} onClick={() => handleModel()} />
            </TrashContainer>
          </HeaderIconEdit>
        </HeaderTaskContainer>
      </BoxTaskContainer>
      {isVisible && (
          <Modal 
          danger 
          children={<p>{task.text}</p>} 
          title={`Tem Certeza que deseja excluir a tarefa ${task.text}`}
          cancelLabel='Cancelar'
          confirmLabel='Confirmar'
          deleteTask={() => handleDeleteTask(task.id)}
          closedModal={() => isVisible ? setIsVisible(false) : null }
        />
      )}
      
    </TasksContainer>
  )
}
