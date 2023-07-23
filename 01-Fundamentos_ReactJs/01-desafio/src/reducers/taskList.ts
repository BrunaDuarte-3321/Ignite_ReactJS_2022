import { ActionsTask } from '../@types/list'
import { ITask } from '../interfaces'

export interface ITasks {
  id: number
  title: string
  finished: boolean
}

export const taskReducer = (tasks: ITask[], action: ActionsTask) => {
  switch (action.type) {
    case 'createTask':
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.payload.text,
          done: false,
        },
      ]

    /* case 'editTask':
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.text = action.payload.newTask
        }
        return task
      }) */

    case 'toggleDone':
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, done: !task.done }
        }
        return task
      })

    case 'deleteTask':
      return tasks.filter((task) => {
        return task.id !== action.payload.id
      })

    default:
      return tasks
  }
}
