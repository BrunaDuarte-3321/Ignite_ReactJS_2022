import './styles/global.css'
import { Provider as ReducexProvider } from 'react-redux'
import { store } from './store'
import { Player } from './pages/Player'
export function App() {
  return (
    <ReducexProvider store={store}>
      <Player />
    </ReducexProvider>
  )
}
