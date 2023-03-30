import { createContext, ReactNode, useEffect, useState } from 'react'

interface AuthorProps {
  avatarUrl: string
  name: string
  role: string
}

interface PropsPost {
  author: AuthorProps
  content: string
  publishedAt: string
}
interface ContextProps {
  newDataPost: (data: PropsPost) => void
  posts: PropsPost[]
}
export const ContextPost = createContext({} as ContextProps)

interface PropsProvider {
  children: ReactNode
}

export const ContextPostProvider = ({ children }: PropsProvider) => {
  const [newPost, setNewPost] = useState<PropsPost>()
  const [posts, setPosts] = useState<PropsPost[]>([])

  const newDataPost = ({ author, content, publishedAt }: PropsPost) => {
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
