import { AvatarContainer } from './styles'

interface Props {
  avatar?: string
}

export function Avatar({ avatar }: Props) {
  return (
    <AvatarContainer>
      <img src={`https://github.com/${avatar}.png`} alt="" />
    </AvatarContainer>
  )
}
