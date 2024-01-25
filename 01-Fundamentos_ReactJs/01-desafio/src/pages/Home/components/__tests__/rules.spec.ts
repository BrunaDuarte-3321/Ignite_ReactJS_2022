import { createTaskAction, deleteTaskAction, editeTaskAction, toggleDoneAction } from "../FormCreateTask/rules";

 

describe('Task CRUD Actions', () => {

  it('should create  task action', () => {
    const task = { id: 1, text: 'Task 1', done: false }
    const action = createTaskAction(task)
    expect(action.type).toBe('createTask')
    expect(action.payload).toEqual(task)
  });

  it('should create a deleteTask action', () => {
    const id = 1;
    const action = deleteTaskAction(id)
    expect(action.type).toBe('deleteTask')
    expect(action.payload).toEqual({ id })
  })

  it('should editeTask action', () => {
    const id = 1
    const newTask = 'Updated Task'
    const action = editeTaskAction(id, newTask)
    expect(action.type).toBe('editeTask')
    expect(action.payload).toEqual({ id, newTask })
  })

  it('should  toggleDone action', () => {
    const id = 1
    const action = toggleDoneAction(id)
    expect(action.type).toBe('toggleDone')
    expect(action.payload).toEqual({ id })
  });
});
