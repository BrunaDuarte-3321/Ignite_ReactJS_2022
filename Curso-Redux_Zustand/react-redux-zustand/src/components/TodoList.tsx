import { useAppSelector } from '../store'

export function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo
  })

  console.log(todos, 'store')
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}
