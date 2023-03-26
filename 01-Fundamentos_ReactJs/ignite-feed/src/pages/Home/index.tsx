import { usePost } from '../../hooks/usePost'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { WriteAtPost } from './components/WriteAtPost'
import { HomeContainer } from './styles'

export function Home() {
  const { posts } = usePost()
  return (
    <HomeContainer>
      <Sidebar />
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        ))
      ) : (
        <WriteAtPost />
      )}
    </HomeContainer>
  )
}
