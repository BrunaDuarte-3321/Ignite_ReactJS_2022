import { PlusCircle, ClipboardText } from 'phosphor-react'
import { ChangeEvent, FormEvent, useReducer, useState } from 'react'
import { Task } from '../Tasks'
import {
  AccountContainer,
  AccountTasksContainer,
  FormCreateTaskContainer,
  NoTaskContainer,
  NoTaskContentContainer,
} from './styles'
import { taskReducer } from '../../../reducers/taskList'

export const FormCreateTask = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [newTask, setNewTask] = useState<string>('')
  const [accountNewTask, setAccountNewTask] = useState<number>(0)
  const [accountFinishedTask, setAccountFinishedTask] = useState<number>(0)

  const handleNewTaskText = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()
    dispatch({
      type: 'createTask',
      payload: { id: tasks.length, title: newTask },
    })
    setNewTask('')
    setAccountNewTask(tasks.length + 1)
  }

  const deletContentTask = (id: number) => {
    dispatch({
      type: 'deleteTask',
      payload: { id },
    })

    setAccountNewTask(tasks.length - 1)
    accountFinishedTask === 0
      ? setAccountFinishedTask(0)
      : setAccountFinishedTask(accountFinishedTask - 1)
  }

  const handleAccountFinished = (finished: boolean) => {
    if (!finished) {
      setAccountFinishedTask(accountFinishedTask + 1)
    } else {
      setAccountFinishedTask(accountFinishedTask - 1)
    }
  }

  return (
    <FormCreateTaskContainer className="container">
      <form action="" onSubmit={handleCreateNewTask}>
        <input
          required
          type="text"
          value={newTask}
          onChange={handleNewTaskText}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" /* disabled={isSubmitDisabled} */>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <AccountTasksContainer>
        <AccountContainer variant="blue">
          <p>
            Tarefas criadas <span>{accountNewTask}</span>
          </p>
        </AccountContainer>
        <AccountContainer variant="purple">
          <p>
            Concluídas{' '}
            <span>
              {accountFinishedTask} de {accountNewTask}
            </span>
          </p>
        </AccountContainer>
      </AccountTasksContainer>
      {tasks.length !== 0 ? (
        tasks.map((item) => {
          return (
            <Task
              handleAccountFinished={handleAccountFinished}
              key={item.id}
              task={item}
              deletContentTask={deletContentTask}
            />
          )
        })
      ) : (
        <NoTaskContainer>
          <NoTaskContentContainer>
            <ClipboardText size={56} />
            <p>Você ainda não tem tarefas cadastradas </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </NoTaskContentContainer>
        </NoTaskContainer>
      )}
    </FormCreateTaskContainer>
  )
}
