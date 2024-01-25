import { useReducer } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ClipboardText, PlusCircle } from 'phosphor-react'
import { Task } from '../Tasks'
import {
  FormCreateTaskContainer,
  NoTaskContainer,
  NoTaskContentContainer,
} from './styles'
import { taskReducer } from '../../../../reducers/taskList'
import { Input } from '../../../../components/Input'
import Button from '../../../../components/Button'
import { ITask } from '../../../../interfaces'
import {
  createTaskAction,
  deleteTaskAction,
  editeTaskAction,
  toggleDoneAction,
} from './rules'
import { HeaderTasks } from '../AccountTask'

export const FormCreateTask = () => {
  const { register, handleSubmit, reset } = useForm<ITask>()
  const [tasks, dispatch] = useReducer(taskReducer, [])

  const handleCreateTask: SubmitHandler<ITask> = (task) => {
    dispatch(createTaskAction(task))
    reset()
  }
  const handleEditeTask = (id: number, newTask: string) => {
    const task = tasks.find((task) => task.id === id)
    if (!task) return false
    const newText = window.prompt('Editar Tarefa', task.text)
    if (!newText || newTask === '') return false
    dispatch(editeTaskAction(id, newText))
  }
  const handleAccountFinished = (id: number) => {
    dispatch(toggleDoneAction(id))
  }

  const deleteContentTask = (id: number) => {
    dispatch(deleteTaskAction(id))
  }

  return (
    <FormCreateTaskContainer className="container">
      <form action="" onSubmit={handleSubmit(handleCreateTask)}>
        <Input
          required
          type="text"
          {...register('text')}
          placeholder="Adicione uma nova tarefa"
        />
        <Button  icon={<PlusCircle size={16} />} title="Criar" type="submit" />
      </form>
      <HeaderTasks tasks={tasks} />
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Task
              handleAccountFinished={handleAccountFinished}
              key={task.id}
              task={task}
              handleEditeTask={handleEditeTask}
              deleteContentTask={deleteContentTask}
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
