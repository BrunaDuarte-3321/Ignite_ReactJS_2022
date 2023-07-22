import { useReducer, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PlusCircle, ClipboardText } from 'phosphor-react'
import { Task } from '../Tasks'
import {
  AccountContainer,
  AccountTasksContainer,
  FormCreateTaskContainer,
  NoTaskContainer,
  NoTaskContentContainer,
} from './styles'
import { ITasks, taskReducer } from '../../../reducers/taskList'
import { Input } from '../../../components/Input'
import Button from '../../../components/Button'

export const FormCreateTask = () => {
  const { register, handleSubmit, reset } = useForm<ITasks>()
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [accountNewTask, setAccountNewTask] = useState<number>(0)
  const [accountFinishedTask, setAccountFinishedTask] = useState<number>(0)

  const handleCreateTask: SubmitHandler<ITasks> = ({ id, title, finished }) => {
    dispatch({
      type: 'createTask',
      payload: { id, title, finished: false },
    })
    reset()
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
  console.log(tasks, ' tasks')
  return (
    <FormCreateTaskContainer className="container">
      <form action="" onSubmit={handleSubmit(handleCreateTask)}>
        <Input
          required
          type="text"
          {...register('title')}
          placeholder="Adicione uma nova tarefa"
        />
        <Button icon={<PlusCircle size={16} />} title="Criar" type="submit" />
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
