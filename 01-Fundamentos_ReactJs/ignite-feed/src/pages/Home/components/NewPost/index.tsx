import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../../../../hooks/usePost'
import { NewPostContainer, NewPostContent } from './styles'

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
export function NewPost() {
  const { newDataPost } = usePost()
  const { register, handleSubmit, reset } = useForm<PropsPost>()
  const navigate = useNavigate()

  const handleNewPost: SubmitHandler<PropsPost> = ({
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
            required
          />
          <textarea
            required
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
