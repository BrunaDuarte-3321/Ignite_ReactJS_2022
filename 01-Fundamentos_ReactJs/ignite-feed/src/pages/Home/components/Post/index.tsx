import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Avatar } from '../../../../components/Avatar'
import { Comment } from '../Comment'
import { Author, PostContainer, PostContent, PostForm } from './styles'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PropsPost {
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
interface PropsForm {
  comment: string
}

export function Post({ author, content, publishedAt }: PropsPost) {
  const [postComment, setPostComment] = useState('')
  const [comments, setComments] = useState<string[]>([])
  const { register, handleSubmit, reset } = useForm<PropsForm>()

  const convertedDate = parseISO(publishedAt)
  const publichatedPost = format(convertedDate, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const handleComment: SubmitHandler<PropsForm> = ({ comment }) => {
    setPostComment(comment)
    reset()
  }

  const deleteOneWithComment = (comment: string) => {
    const newComments = comments.filter((item) => {
      return item !== comment
    })

    setComments(newComments)
  }

  useEffect(() => {
    if (postComment !== '') {
      setComments((e) => [...e, postComment])
    }
  }, [postComment])

  return (
    <PostContainer>
      <header>
        <Author>
          <Avatar avatar={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </Author>
        <time title="11 de Março de 2023">
          Públicado em {publichatedPost || 'Sem data definida'}
        </time>
      </header>
      <PostContent>
        <p>conteudo do post </p>
        {/* <p>
              É um projeto que fiz no NLW Return, evento da Rocketseat. O nome
              do projeto é DoctorCare 🚀
            </p>
            <p>
              <a href="">jane.design/doctorcare</a>
            </p>
            <div>
              <p>
                <a href="#">#novoprojeto </a>
                <a href="#"> #nlw</a>
                <a href="#">#rocketseat</a>
              </p> 
            </div> */}
      </PostContent>
      <PostForm onSubmit={handleSubmit(handleComment)}>
        <h3>Deixe seu feedback</h3>
        <textarea placeholder="Deixe um comentário" {...register('comment')} />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </PostForm>
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment}
            comments={comment}
            deleteOneWithComment={deleteOneWithComment}
          />
        ))}
    </PostContainer>
  )
}
