type CreateTask = {
  type: 'createTask'
  payload: {
    id: number
    title: string
  }
}
type DeleteTask = {
  type: 'deleteTask'
  payload: {
    id: number
  }
}

export type ActionsTask = CreateTask | DeleteTask
