import { useContext } from 'react'
import { ContextPost } from '../contexts/PostContext'

export const usePost = () => {
  const context = useContext(ContextPost)
  return context
}
