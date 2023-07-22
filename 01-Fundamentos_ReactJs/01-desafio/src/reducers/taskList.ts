import { ActionsTask } from '../@types/list'

export interface ITasks {
  id: number
  title: string
  finished: boolean
}

export const taskReducer = (tasks: ITasks[], action: ActionsTask) => {
  switch (action.type) {
    case 'createTask':
      return [
        ...tasks,
        {
          id: tasks.length,
          title: action.payload.title,
          finished: action.payload.finished,
        },
      ]

    case 'deleteTask':
      return tasks.filter((task) => {
        return task.id !== action.payload.id
      })

    default:
      return tasks
  }
}
