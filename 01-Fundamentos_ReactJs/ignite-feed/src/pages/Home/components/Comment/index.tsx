import {
  CommentBox,
  CommentContainer,
  CommentContent,
  CommentHeader,
  CommentImage,
} from './styles'
import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../../../../components/Avatar'

interface Props {
  comments: string
  deleteOneWithComment: (comment: string) => void
}
export function Comment({ comments, deleteOneWithComment }: Props) {
  const [likes, setLikes] = useState(0)

  const onLikes = () => {
    setLikes(likes + 1)
  }
  return (
    <CommentContainer>
      <CommentImage>
        <Avatar avatar="diego3g" />
      </CommentImage>
      <CommentBox>
        <CommentContent>
          <CommentHeader>
            <div>
              <strong>UserName</strong>
              <time>Cerca de 2h</time>
            </div>
            <button>
              <Trash size={24} onClick={() => deleteOneWithComment(comments)} />
            </button>
          </CommentHeader>
          <p>{comments}</p>
        </CommentContent>
        <footer>
          <button onClick={onLikes}>
            <ThumbsUp /> Aplaudir
            <span>{likes}</span>
          </button>
        </footer>
      </CommentBox>
    </CommentContainer>
  )
}
