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
import { HeaderTasks } from '../HeaderTasks'
import { ITask } from '../../../../interfaces'
import { createTaskAction, deleteTaskAction, toggleDoneAction } from './rules'

export const FormCreateTask = () => {
  const { register, handleSubmit, reset } = useForm<ITask>()
  const [tasks, dispatch] = useReducer(taskReducer, [])

  const handleCreateTask: SubmitHandler<ITask> = (task) => {
    dispatch(createTaskAction(task))
    reset()
  }

  const deleteContentTask = (id: number) => {
    dispatch(deleteTaskAction(id))
  }

  const handleAccountFinished = (id: number) => {
    dispatch(toggleDoneAction(id))
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
        <Button icon={<PlusCircle size={16} />} title="Criar" type="submit" />
      </form>
      <HeaderTasks tasks={tasks} />
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Task
              handleAccountFinished={handleAccountFinished}
              key={task.id}
              task={task}
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
