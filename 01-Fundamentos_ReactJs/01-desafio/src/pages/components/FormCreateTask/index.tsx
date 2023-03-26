import { PlusCircle, ClipboardText } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../Tasks'
import {
  AccountContainer,
  AccountTasksContainer,
  FormCreateTaskContainer,
  NoTaskContainer,
  NoTaskContentContainer,
} from './styles'

export const FormCreateTask = () => {
  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])
  const [accountNewTask, setAccountNewTask] = useState<number>(0)
  const [accountFinishedTask, setAccountFinishedTask] = useState<number>(0)

  const handleNewTaskText = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask('')
    setAccountNewTask(tasks.length + 1)
  }

  const deletContentTask = (contetTask: string) => {
    const deletWithoutTaskOne = tasks.filter((deletTask) => {
      return deletTask !== contetTask
    })

    setTasks(deletWithoutTaskOne)
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
  /* const isSubmitDisabled = !task */

  return (
    <FormCreateTaskContainer className="container">
      <form action="" onSubmit={handleCreateNewTask}>
        <input
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
              key={item}
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
