import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Provider as ReducexProvider } from 'react-redux'
import { store } from './store'
export function App() {
  return (
    <ReducexProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReducexProvider>
  )
}
