import { ActionsTask } from '../@types/list'
import { ITask } from '../interfaces'

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

    case 'editeTask':
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, text: action.payload.newTask }
        }
        return task
      })

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
