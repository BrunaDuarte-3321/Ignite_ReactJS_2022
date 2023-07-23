import { ITask } from '../interfaces'

interface ICreateTask {
  type: 'createTask'
  payload: ITask
}
interface IEditeTask {
  type: 'editeTask'
  payload: {
    id: number
    newTask: string
  }
}
interface IToggleDone {
  type: 'toggleDone'
  payload: { id: number }
}

interface IDeleteTask {
  type: 'deleteTask'
  payload: { id: number }
}

export type ActionsTask = ICreateTask | IDeleteTask | IToggleDone | IEditeTask
