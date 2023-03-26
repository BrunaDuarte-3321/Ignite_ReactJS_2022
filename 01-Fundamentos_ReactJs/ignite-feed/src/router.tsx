import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewPost } from './pages/Home/components/NewPost'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newpost" element={<NewPost />} />
    </Routes>
  )
}
