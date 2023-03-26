import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../../../../hooks/usePost'
import { NewPostContainer, NewPostContent } from './styles'

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
export function NewPost() {
  const { newDataPost } = usePost()
  const { register, handleSubmit, reset } = useForm<PropsNewPost>()
  const navigate = useNavigate()

  const handleNewPost: SubmitHandler<PropsNewPost> = ({
    author,
    content,
    publishedAt,
  }) => {
    const data = {
      author,
      content,
      publishedAt,
    }
    newDataPost(data)
    reset()
    navigate('/')
  }

  return (
    <NewPostContainer>
      <NewPostContent>
        <h3>Criar novo post</h3>
        <form onSubmit={handleSubmit(handleNewPost)}>
          <input
            type="text"
            placeholder="Name"
            {...register('author.name')}
            className="name"
          />
          <input
            type="text"
            placeholder=" User GitHub"
            {...register('author.avatarUrl')}
            className="profileGit"
          />
          <input
            type="text"
            placeholder="Profissão"
            {...register('author.role')}
            className="role"
          />
          <input
            type="datetime-local"
            placeholder="data"
            {...register('publishedAt')}
            className="date"
          />
          <textarea
            placeholder="Post"
            {...register('content')}
            className="post"
          />
          <div className="button">
            <button type="submit">Postar</button>
          </div>
        </form>
      </NewPostContent>
    </NewPostContainer>
  )
}
