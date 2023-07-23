import { ActionsTask } from '../../../../@types/list'
import { ITask } from '../../../../interfaces'

export const createTaskAction = (task: ITask): ActionsTask => ({
  type: 'createTask',
  payload: task,
})

export const deleteTaskAction = (id: number): ActionsTask => ({
  type: 'deleteTask',
  payload: { id },
})

export const toggleDoneAction = (id: number): ActionsTask => ({
  type: 'toggleDone',
  payload: { id },
})
