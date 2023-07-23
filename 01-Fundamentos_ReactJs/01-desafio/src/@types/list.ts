import { ITask } from '../interfaces'

interface ICreateTask {
  type: 'createTask'
  payload: ITask
}

interface IDeleteTask {
  type: 'deleteTask'
  payload: { id: number }
}

interface IToggleDone {
  type: 'toggleDone'
  payload: { id: number }
}

export type ActionsTask = ICreateTask | IDeleteTask | IToggleDone
