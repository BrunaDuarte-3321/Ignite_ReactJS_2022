import { createContext, ReactNode, useEffect, useState } from 'react'

interface PropsNewPost {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: [
    {
      type: 'paraghraph' | 'link'
      content: string
    },
  ]
  publishedAt: string
}
interface ContextProps {
  newDataPost: (data: PropsNewPost) => void
  posts: PropsNewPost[]
}
export const ContextPost = createContext({} as ContextProps)

interface PropsProvider {
  children: ReactNode
}

export const ContextPostProvider = ({ children }: PropsProvider) => {
  const [newPost, setNewPost] = useState<PropsNewPost>()
  const [posts, setPosts] = useState<PropsNewPost[]>([])

  const newDataPost = ({ author, content, publishedAt }: PropsNewPost) => {
    const datas = {
      author,
      content,
      publishedAt,
    }
    setNewPost(datas)
  }

  useEffect(() => {
    if (newPost !== undefined) {
      setPosts((e) => [...e, newPost])
      alert('Post Criado com sucesso')
    }
  }, [newPost])

  return (
    <ContextPost.Provider value={{ newDataPost, posts }}>
      {children}
    </ContextPost.Provider>
  )
}
