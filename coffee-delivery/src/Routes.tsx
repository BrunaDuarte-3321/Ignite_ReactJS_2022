import { Routes, Route } from 'react-router-dom'
import { CompleteOrder } from './pages/CompleteOrder'
import { HomePage } from './pages/Home'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/complete" element={<CompleteOrder />} />
    </Routes>
  )
}
