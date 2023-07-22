type CreateTask = {
  type: 'createTask'
  payload: {
    id: number
    title: string
    finished: boolean
  }
}
type DeleteTask = {
  type: 'deleteTask'
  payload: {
    id: number
  }
}

/* type FinishedTask = {
  type: 'finishedTask'
  payload: {
    finished: boolean
    completedTask: number
  }
} */

export type ActionsTask = CreateTask | DeleteTask
